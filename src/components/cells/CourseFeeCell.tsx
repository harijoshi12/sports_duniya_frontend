import React from "react";

interface Props {
  fee: number;
}

const CourseFeeCell: React.FC<Props> = ({ fee }) => {
  return (
    <td className="border px-4 py-4 align-top">
      <p className="text-green-500 font-bold">₹ {fee.toLocaleString()}</p>
      <p className="text-sm text-gray-500">BE/B.Tech</p>
      <p className="text-sm text-gray-500">1st Year Fees</p>
    </td>
  );
};

export default CourseFeeCell;
