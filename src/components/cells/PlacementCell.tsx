import React from "react";

interface Props {
  averagePackage: number;
  highestPackage: number;
}

const PlacementCell: React.FC<Props> = ({ averagePackage, highestPackage }) => {
  return (
    <td className="border px-4 py-2">
      <p>₹ {averagePackage.toLocaleString()}</p>
      <p className="text-sm text-gray-500">Average Package</p>
      <p>₹ {highestPackage.toLocaleString()}</p>
      <p className="text-sm text-gray-500">Highest Package</p>
    </td>
  );
};

export default PlacementCell;
