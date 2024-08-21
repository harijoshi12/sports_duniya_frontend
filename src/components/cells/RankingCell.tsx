import React from "react";

interface Props {
  nirfRanking: number;
  otherRankings: { name: string; rank: number; year: number }[];
}

const RankingCell: React.FC<Props> = ({ nirfRanking, otherRankings }) => {
  return (
    <td className="border px-4 py-2">
      <p>
        #{nirfRanking} NIRF {new Date().getFullYear()}
      </p>
      {otherRankings.map((ranking, index) => (
        <p key={index}>
          #{ranking.rank} {ranking.name} {ranking.year}
        </p>
      ))}
    </td>
  );
};

export default RankingCell;
