import React from "react";
import { SortableColumns } from "../types/types";

interface Props {
  onSort: (key: SortableColumns) => void;
  sortKey: SortableColumns | null;
  sortOrder: "asc" | "desc" | null;
}

const SortControls: React.FC<Props> = ({ onSort, sortKey, sortOrder }) => {
  const renderSortIcon = (key: SortableColumns) => {
    if (sortKey === key) {
      return sortOrder === "asc" ? "▲" : "▼";
    }
    return "⇅";
  };

  return (
    <thead className="text-xs text-white uppercase bg-emerald-500">
      <tr>
        <th
          onClick={() => onSort("cdRank")}
          className="px-6 py-3 cursor-pointer">
          CD Rank {renderSortIcon("cdRank")}
        </th>
        <th>Colleges</th>
        <th
          onClick={() => onSort("courseFee")}
          className="px-6 py-3 cursor-pointer">
          Course Fees {renderSortIcon("courseFee")}
        </th>
        <th>Placement</th>
        <th
          onClick={() => onSort("userRating")}
          className="px-6 py-3 cursor-pointer">
          User Reviews {renderSortIcon("userRating")}
        </th>
        <th
          onClick={() => onSort("nirfRanking")}
          className="px-6 py-3 cursor-pointer">
          Ranking {renderSortIcon("nirfRanking")}
        </th>
      </tr>
    </thead>
  );
};

export default SortControls;
