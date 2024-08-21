import { forwardRef } from "react";
import { College } from "../types/types";
import CDRankCell from "./cells/CDRankCell";
import CollegeCell from "./cells/CollegeCell";
import CourseFeeCell from "./cells/CourseFeeCell";
import PlacementCell from "./cells/PlacementCell";
import UserReviewsCell from "./cells/UserReviewsCell";
import RankingCell from "./cells/RankingCell";

interface Props {
  college: College;
  isEven: boolean;
}

const CollegeTableRow = forwardRef<HTMLTableRowElement, Props>(
  ({ college, isEven }, ref) => {
    const rowClass = college.featured
      ? "bg-yellow-50 border-b hover:bg-yellow-100"
      : isEven
      ? "bg-white border-b hover:bg-gray-50"
      : "bg-gray-50 border-b hover:bg-gray-100";
    return (
      <tr className={rowClass} ref={ref}>
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
  }
);

export default CollegeTableRow;
