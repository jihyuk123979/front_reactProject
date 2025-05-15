import { useCallback } from "react";
import ReviewListItem from "./ReviewListItem";

const ReviewList = ({ reviews, onRemove, onEdit }) => {
  return (
    <div className="ReviewList">
      {reviews.map((review) => (
        <ReviewListItem
          key={review.id}
          review={review}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ReviewList;
