import { createSlice, createSelector } from "@reduxjs/toolkit";
import { CrytpoDataInit } from "../data/CryptoData";

const cryptoSlice = createSlice({
  name: "crypto",

  initialState: {
    assets: CrytpoDataInit,
    loading: false,
    error: null,
  },

  reducers: {
    updateAsset: (state, action) => {
      const { id, updates } = action.payload;
      const assetIndex = state.assets.findIndex((asset) => asset.id === id);
      if (assetIndex !== -1) {
        state.assets[assetIndex] = {
          ...state.assets[assetIndex],
          ...updates,
          lastUpdated: Date.now(),
        };
      }
    },
    updateAllAssets: (state, action) => {
      state.assets = action.payload.map((asset) => ({
        ...asset,
        lastUpdated: Date.now(),
      }));
    },
    setLoadingState: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },

  devTools: process.env.NODE_ENV !== 'production',

});

export const selectAllAssets = (state) => state.crypto.assets;
export const selectLoading = (state) => state.crypto.loading;
export const selectError = (state) => state.crypto.error;
export const selectAssetById = createSelector(
  [selectAllAssets, (_, id) => id],
  (assets, id) => assets.find((asset) => asset.id === id)
);

export const { updateAsset, updateAllAssets, setLoadingState, setError } =
  cryptoSlice.actions;

export default cryptoSlice.reducer;
