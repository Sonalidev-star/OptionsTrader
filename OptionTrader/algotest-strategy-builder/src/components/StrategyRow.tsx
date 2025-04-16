
import React from "react";
export default function StrategyRow() {
    return (
      <tr className="text-sm text-gray-800">
        <td>
          <select className="border rounded px-2 py-1">
            <option>NIFTY</option>
            <option>BANKNIFTY</option>
          </select>
        </td>
        <td>
          <select className="border rounded px-2 py-1">
            <option>CE</option>
            <option>PE</option>
          </select>
        </td>
        <td>
          <input type="number" className="border rounded px-2 py-1 w-24" defaultValue="18000" />
        </td>
        <td>
          <input type="date" className="border rounded px-2 py-1" />
        </td>
        <td>
          <input type="number" className="border rounded px-2 py-1 w-20" defaultValue="1" />
        </td>
        <td>
          <select className="border rounded px-2 py-1">
            <option>Buy</option>
            <option>Sell</option>
          </select>
        </td>
        <td>
          <button className="text-red-600 hover:underline">Delete</button>
        </td>
      </tr>
    );
  }
  