import { useState, useRef } from "react";
import "./ReviewInsert.scss";

const ReviewInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const [author, setAuthor] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const inputRef = useRef(null);
  const authorRef = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!author) {
      setErrorMessage("작성자를 입력해 주세요");
      authorRef.current.focus();
      return;
    } else if (!value) {
      setErrorMessage("공백으로는 등록할 수 없습니다!");
      inputRef.current.focus();
      return;
    }
    onInsert(value, author);
    setValue("");
    setAuthor("");
    setErrorMessage("");
  };

  return (
    <form className="ReviewInsert" onSubmit={onSubmit}>
      <div className="inputInsert ">
        <input
          ref={authorRef}
          placeholder="작성자 이름"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className="authorInsert"
          ref={inputRef}
          placeholder="감상평을 작성해 주세요"
          value={value}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </form>
  );
};

export default ReviewInsert;
