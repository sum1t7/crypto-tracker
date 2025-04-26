import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllAssets } from "../store/CryptoSlice";
import { webSocketService } from "../services/WebSocketService";
import CryptoRow from "./CryptoRow";
import "./CryptoTable.css";

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets);

  useEffect(() => {
    webSocketService.connect();

    return () => {
      webSocketService.disconnect();
    };
  }, []);

  return (
    <div className="crypto-table-container">
      <div className="connection">
        <span className="websocket-indicator"></span>
        Live updates enabled
      </div>

      <div className="table-responsive">
        <table className="crypto-table">
          <thead>
            <tr>
              <th className="sticky-column">#</th>
              <th className="sticky-column">Name</th>

              <th>Price</th>
              <th>1h %</th>
              <th>24h %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>24h Volume</th>
              <th>Circulating Supply</th>
              <th>Max Supply</th>
              <th>7D Chart</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <CryptoRow key={asset.id} asset={asset} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
