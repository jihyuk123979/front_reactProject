import "./ReviewTemplate.scss";

const ReviewTemplate = ({ children }) => {
  return (
    <div className="ReviewTemplate">
      <div className="pctreview">감상평</div>
      <div className="review1">{children}</div>
    </div>
  );
};

export default ReviewTemplate;
