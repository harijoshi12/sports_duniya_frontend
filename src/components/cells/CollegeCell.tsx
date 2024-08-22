// src/components/cells/CollegeCell.tsx

import React from "react";
import { College } from "../../types/types";

interface Props {
  college: College;
}

const CollegeCell: React.FC<Props> = ({ college }) => {
  return (
    <td className="border px-4 py-2 relative">
      {college.featured && (
        <>
          <span className="absolute bg-red-600 py-1 left-[10px] -top-2 w-20 rounded-t-lg"></span>
          <span className="absolute -top-2 left-4 bg-red-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-md transform">
            Featured
          </span>
        </>
      )}
      <div className="flex items-center">
        <img src={college.logo} alt={college.name} className="w-12 h-12 mr-2" />
        <div>
          <h3 className="font-bold text-cyan-400">{college.name}</h3>
          <p>
            {college.location} | {college.affiliatedBy} Approved
          </p>
          <div className="bg-yellow-100 px-2 py-1 mt-1 border-l-4 border-amber-500">
            <p className="text-amber-500">
              {college.courseName} {"&#8964"}
            </p>
            <p>
              JEE Advanced Cutoff: {college.jeeAdvanceCutoff}/360 (
              {college.jeeAdvanceCutoffYear})
            </p>
          </div>
        </div>
      </div>
    </td>
  );
};

export default CollegeCell;
