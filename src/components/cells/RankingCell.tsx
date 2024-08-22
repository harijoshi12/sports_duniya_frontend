// src/components/cells/RankingCell.tsx

import React from "react";

interface Props {
  nirfRanking: number;
  otherRankings: { name: string; rank: number; year: number }[];
}

const RankingCell: React.FC<Props> = ({ nirfRanking, otherRankings }) => {
  return (
    <td className="border px-4 py-4 align-top">
      <p>
        #{nirfRanking} NIRF {new Date().getFullYear()}
      </p>
      {otherRankings.length > 0 && (
        <div className="bg-blue-100 px-2 py-1 mt-1 border-l-4 border-blue-500">
          <p className="text-blue-500 flex items-center">
            Other Rankings
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
          {otherRankings.map((ranking, index) => (
            <p key={index}>
              #{ranking.rank} {ranking.name} {ranking.year}
            </p>
          ))}
        </div>
      )}
    </td>
  );
};

export default RankingCell;
