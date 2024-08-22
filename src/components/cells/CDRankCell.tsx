import React from "react";

interface Props {
  rank: number;
}

const CDRankCell: React.FC<Props> = ({ rank }) => {
  return <td className="border px-4 py-2 font-bold">#{rank}</td>;
};

export default CDRankCell;
