import React, { useState } from "react";
import "./InsideInfo.scss";

const floorMaps = [
  {
    label: "지하1층",
    imgUrl: "https://sema.seoul.go.kr/common/imgFileView?FILE_ID=849534",
  },
  {
    label: "1층",
    imgUrl: "https://sema.seoul.go.kr/common/imgFileView?FILE_ID=940800",
  },
  {
    label: "2층",
    imgUrl: "https://sema.seoul.go.kr/common/imgFileView?FILE_ID=940828",
  },
  {
    label: "3층",
    imgUrl: "https://sema.seoul.go.kr/common/imgFileView?FILE_ID=734594",
  },
];

const InsideInfo = () => {
  const [visibleFloors, setVisibleFloors] = useState(false);

  const toggleFloor = (floor) => {
    setVisibleFloors((prev) => ({
      ...prev,
      [floor]: !prev[floor],
    }));
  };

  return (
    <div className="inside-info-container">
      <h2>서울시립미술관 서소문본관</h2>
      <p>과거와 현대를 아우르며 모두가 만나고 경험하는 미술관입니다.</p>

      <div className="intro-section">
        <p>
          서울시립미술관은 모두가 만나고 경험하는 미술관입니다. 서울 근현대사의
          자취를 고스란히 간직한 정동 한가운데 위치한 서소문본관은 르네상스식 옛
          대법원 건물과 현대 건축이 조화를 이루고 있습니다. 전시, 교육,
          스크리닝, 워크숍, 공연, 토크 등 다양한 프로그램과 더불어 SeMA Cafe+,
          예술 서점, 로비 공간, 그리고 야외 조각 공원이 모두에게 다양한 미술
          체험에 이르는 길을 제공합니다.(전경사진: ⓒKim YongKwan)
        </p>
        <img
          alt="서울시립미술관 서소문본관"
          src="https://sema.seoul.go.kr/common/imgFileView?FILE_ID=842765"
        />
      </div>

      <div className="guidemap-section">
        내부 구조
        {floorMaps.map((floor) => (
          <div key={floor.label} className="floor-map-block">
            <button
              className="toggle-button"
              onClick={() => toggleFloor(floor.label)}
            >
              {visibleFloors[floor.label] ? "숨기기" : `${floor.label} `}
            </button>
            {visibleFloors[floor.label] && (
              <div className="floor-image">
                <img src={floor.imgUrl} alt={floor.label} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsideInfo;
