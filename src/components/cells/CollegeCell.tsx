import React from "react";
import { College } from "../../types/types.ts";

interface Props {
  college: College;
}

const CollegeCell: React.FC<Props> = ({ college }) => {
  return (
    <td className="border px-4 py-2">
      <div className="flex items-center">
        <img src={college.logo} alt={college.name} className="w-12 h-12 mr-2" />
        <div>
          <h3 className="font-bold">{college.name}</h3>
          <p>{college.location}</p>
          <p>{college.courseName}</p>
          <p>Affiliated by: {college.affiliatedBy}</p>
          <p>
            JEE Advanced Cutoff: {college.jeeAdvanceCutoff}/360 (
            {college.jeeAdvanceCutoffYear})
          </p>
        </div>
      </div>
      {college.featured && (
        <span className="bg-yellow-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
          Featured
        </span>
      )}
    </td>
  );
};

export default CollegeCell;
