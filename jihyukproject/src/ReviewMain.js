import { useCallback, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ReviewTemplate from "./Review/ReviewTemplate";
import ReviewInsert from "./Review/ReviewInsert";
import ReviewList from "./Review/ReviewList";
import styled from "styled-components";
import MainMenus from "./MainMenus";

const ReviewInfo = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1rem;
  display: flex;
  gap: 2rem;

  h2 {
    margin: 0 0 0.5rem;
  }

  img {
    width: 200px;
    margin-top: 1rem;
  }
  .description {
    line-height: 1.6;
    color: #444;
    white-space: pre-line; /* 줄바꿈이 적용되도록 */
    padding-top: 1rem;
  }
`;

const descriptions = {
  무속: "박생광(1904-1985, 호 내고(乃古))은 1920년 일본 교토의 다찌가와 미술학원에서 전통 일본화를 공부하고, 1923년 교토시립회화전문학교(현 교토예술대학)에서 신일본화를 배웠다. 해방 이전까지 일본에서 활동하였고, 1947년 귀국해 백양회 창립회원으로 참여했으며, 한국전쟁기에는 고향인 진주에서 작품활동을 지속했다 근대기 일본 화단에서 주로 활동하면서 한국 화단 활동 초기에는 '왜색'등을 이유로 다소 소외된 측면이 있으나, 말년인 1980년대 한국 전통 모트프와 강렬한 색채를 적극활용한 대작들을 집중적으로 선보이면서 한국 채색화의 새로운 지평을 열었다고 평가 받았다. ",
  신화시대:
    "노담(老潭) 김영주는 일본으로 유학하여 다이헤이요미술학교에서 수학했으며, 재학 중에 초현실주의적인 경향을 띠는 전위 미술 단체인 미술문화협회에 참여하였다. 광복 후에 귀국하여 고향인 원산에서 미술 교사로 지내다가 한국전쟁이 발발하자 월남했다. 1955년부터 홍익대학교에서 강의하면 미술 비평문을 쓰기 시작하여 작가이자 비평가로서 활동했고, 1957년에는 한국미술평론가협뢰의 창립에 참여하며 대표를 역임하였다. 김영주는 원초적인 기호와 형상들을 통해 인간의 모습 나아가 예술가로서 자신의 내면세계를 구현하고자 했다.",
  설경: "",
  "취상 1": "",
};

const ReviewMain = () => {
  const { state } = useLocation();
  const {
    prdct_nm_korean,
    mnfct_year,
    main_image,
    writr_nm,
    matrl_technic,
    prdct_cl_nm,
  } = state || {};

  const [reviews, setReviews] = useState([]);

  const nextId = useRef(0);

  const onInsert = (text, author) => {
    const review = {
      id: nextId.current,
      text,
      author,
      checked: false,
    };
    setReviews((reviews) => [review, ...reviews]);
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setReviews((reviews) => reviews.filter((review) => review.id !== id));
  };
  const onEdit = (id, newText) => {
    setReviews((reviews) =>
      reviews.map((r) => (r.id === id ? { ...r, text: newText } : r))
    );
  };
  const getDescription = (name) => {
    return descriptions[name] || "";
  };

  return (
    <div>
      <MainMenus />
      <ReviewTemplate>
        {state && (
          <ReviewInfo>
            <div>
              <h2>{prdct_nm_korean}</h2>
              <p>작가: {writr_nm}</p>
              <p>제작년도: {mnfct_year}</p>
              <p>종류 : {prdct_cl_nm}</p>
              <p>기법: {matrl_technic}</p>
              {main_image && <img src={main_image} alt="작품 썸네일" />}
            </div>
            <div className="description">
              {getDescription(prdct_nm_korean)}{" "}
              {/* 작품 이름에 맞는 설명을 표시 */}
            </div>
          </ReviewInfo>
        )}
        <ReviewInsert onInsert={onInsert} />
        <ReviewList reviews={reviews} onRemove={onRemove} onEdit={onEdit} />
      </ReviewTemplate>
    </div>
  );
};

export default ReviewMain;
