import { store } from "../store";
import { updateAsset } from "../store/CryptoSlice";

class Socket {
  constructor() {
    this.interval = null;
    this.isConnected = false;
  }

  connect() {
    if (this.isConnected) return;

    this.isConnected = true;

    this.interval = setInterval(() => {
      const assets = store.getState().crypto.assets;

      const numAssetsToUpdate = Math.floor(Math.random() * 3) + 1;
      const assetIds = [...Array(assets.length).keys()].map((i) => i + 1);

      for (let i = assetIds.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [assetIds[i], assetIds[j]] = [assetIds[j], assetIds[i]];
      }

      for (let i = 0; i < numAssetsToUpdate; i++) {
        if (i < assetIds.length) {
          this.updateAsset(assetIds[i]);
        }
      }
    }, 1500);

    console.log("WebSocket connected");
  }

  disconnect() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
      this.isConnected = false;
      console.log("WebSocket disconnected");
    }
  }

  updateAsset(id) {
    const asset = store.getState().crypto.assets.find((a) => a.id === id);
    if (!asset) return;

    const priceChangePercent = Math.random() * 4 - 2;
    const newPrice = asset.price * (1 + priceChangePercent / 100);
    const newPercentChange1h =
      asset.changeIn1h + (Math.random() * 5 - 2.5);
    const newPercentChange24h =
      asset.changeIn24h + (Math.random() * 10 - 5);
    const newPercentChange7d =
      asset.changeIn7d + (Math.random() * 15 - 7.5);

    const volumeChangePercent = Math.random() * 10 - 5;
    const newVolume = asset.volume_24h * (1 + volumeChangePercent / 100);

    store.dispatch(
      updateAsset({
        id,
        updates: {
          price: parseFloat(newPrice.toFixed(2)),
          changeIn1h: parseFloat(newPercentChange1h.toFixed(2)),
          changeIn24h: parseFloat(newPercentChange24h.toFixed(2)),
          changeIn7d: parseFloat(newPercentChange7d.toFixed(2)),
          volume_24h: Math.round(newVolume),
        },
      })
    );
  }
}

export const webSocketService = new Socket();
