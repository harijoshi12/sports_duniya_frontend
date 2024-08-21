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
    <thead>
      <tr>
        <th onClick={() => onSort("cdRank")} className="cursor-pointer">
          CD Rank {renderSortIcon("cdRank")}
        </th>
        <th>Colleges</th>
        <th onClick={() => onSort("courseFee")} className="cursor-pointer">
          Course Fees {renderSortIcon("courseFee")}
        </th>
        <th>Placement</th>
        <th onClick={() => onSort("userRating")} className="cursor-pointer">
          User Reviews {renderSortIcon("userRating")}
        </th>
        <th onClick={() => onSort("nirfRanking")} className="cursor-pointer">
          Ranking {renderSortIcon("nirfRanking")}
        </th>
      </tr>
    </thead>
  );
};

export default SortControls;
