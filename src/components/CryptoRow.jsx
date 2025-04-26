import React, { memo } from "react";
import {
  formatCurrency,
  formatPercentage,
  formatLargeNumber,
} from "../utils/formatters";
import "./CryptoRow.css";

const CryptoRow = ({ asset }) => {
  return (
    <tr>
      <td  >{asset.id}</td>
      <td className="asset-info sticky-column">
        <div className="asset-logo">
          <img src={asset.logo} alt={`${asset.name} logo`} />
        </div>
        <div className="asset-name-container ">
          <div className="asset-name">{asset.name}</div>
          <div className="asset-symbol">{asset.symbol}</div>
        </div>
      </td>

      <td
        className={`price ${
          asset.changeIn1h >= 0 ? "fade-green-to-white" : "fade-red-to-white"
        }`}
      >
        {formatCurrency(asset.price)}
      </td>
      <td
        className={`percent-change ${
          asset.changeIn1h >= 0 ? "positive" : "negative"
        }`}
      >
        {formatPercentage(asset.changeIn1h)}
      </td>
      <td
        className={`percent-change ${
          asset.changeIn24h >= 0 ? "positive" : "negative"
        }`}
      >
        {formatPercentage(asset.changeIn24h)}
      </td>
      <td
        className={`percent-change ${
          asset.changeIn7d >= 0 ? "positive" : "negative"
        }`}
      >
        {formatPercentage(asset.changeIn7d)}
      </td>
      <td>{formatLargeNumber(asset.market_cap)}</td>
      <td>{formatLargeNumber(asset.volume_24h)}</td>
      <td>
        {formatLargeNumber(asset.circulating_supply)} {asset.symbol}
      </td>
      <td>
        {asset.max_supply ? formatLargeNumber(asset.max_supply) : "∞"}{" "}
        {asset.symbol}
      </td>
      <td className="sparkline-cell">
        <svg width="75" height="30" viewBox="0 0 110 70">
          <path
            d={asset.sparkline}
            fill="none"
            stroke={asset.changeIn7d >= 0 ? "#16c784" : "#ea3943"}
            strokeWidth="3"
          />
        </svg>
      </td>
    </tr>
  );
};

export default memo(CryptoRow);
