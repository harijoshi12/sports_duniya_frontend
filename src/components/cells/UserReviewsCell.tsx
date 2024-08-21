import React from "react";

interface Props {
  rating: number;
  totalReviews: number;
}

const UserReviewsCell: React.FC<Props> = ({ rating, totalReviews }) => {
  return (
    <td className="border px-4 py-2">
      <p>{rating.toFixed(1)}/10</p>
      <p className="text-sm text-gray-500">
        Based on {totalReviews} user reviews
      </p>
    </td>
  );
};

export default UserReviewsCell;
