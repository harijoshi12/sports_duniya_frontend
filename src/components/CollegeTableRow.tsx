import React from "react";
import { College } from "../types/types";
import CDRankCell from "./cells/CDRankCell";
import CollegeCell from "./cells/CollegeCell";
import CourseFeeCell from "./cells/CourseFeeCell";
import PlacementCell from "./cells/PlacementCell";
import UserReviewsCell from "./cells/UserReviewsCell";
import RankingCell from "./cells/RankingCell";

interface Props {
  college: College;
}

const CollegeTableRow: React.FC<Props> = ({ college }) => {
  return (
    <tr>
      <CDRankCell rank={college.cdRank} />
      <CollegeCell college={college} />
      <CourseFeeCell fee={college.courseFee} />
      <PlacementCell
        averagePackage={college.averagePackage}
        highestPackage={college.highestPackage}
      />
      <UserReviewsCell
        rating={college.userRating}
        totalReviews={college.totalReviews}
      />
      <RankingCell
        nirfRanking={college.nirfRanking}
        otherRankings={college.otherRankings}
      />
    </tr>
  );
};

export default CollegeTableRow;
