import StrategyRow from "./StrategyRow";
import React from "react";
export default function StrategyTable() {
  return (
    <div className="overflow-auto">
      <table className="min-w-full border-separate border-spacing-y-2">
        <thead>
          <tr className="text-left text-gray-600">
            <th>Symbol</th>
            <th>Type</th>
            <th>Strike</th>
            <th>Expiry</th>
            <th>Qty</th>
            <th>Buy/Sell</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <StrategyRow />
          {/* Add more rows dynamically later */}
        </tbody>
      </table>
    </div>
  );
}
