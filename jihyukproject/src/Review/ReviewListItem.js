import React, { useState } from "react";
import "./ReviewListItem.scss";

const ReviewListItem = ({ review, onRemove, onEdit }) => {
  const { id, text, author } = review; // author도 가져옴
  const [Editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(text);

  const reviewEdit = () => {
    setEditing(true); // 수정 모드로 전환
  };

  const reviewEditConfirm = () => {
    if (editValue.trim()) {
      onEdit(id, editValue); // 수정된 값 부모로 전달
      setEditing(false); // 수정 모드 종료
    }
  };

  return (
    <div className="ReviewListItem">
      {Editing ? (
        <>
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)} // 수정된 값 업데이트
          />
          <button onClick={reviewEditConfirm}>저장</button>
        </>
      ) : (
        <>
          <div className="author">작성자: {author}</div>
          <n />
          <div className="text">{text}</div>
          <div className="buttons">
            <button onClick={reviewEdit}>수정</button>
            <button onClick={() => onRemove(id)}>삭제</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ReviewListItem;
