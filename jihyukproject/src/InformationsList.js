import React, { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import styled from "styled-components";
import Information from "./Information";
import { AutoSizer, List } from "react-virtualized";
import InformationMenus from "./InformationMenus";

const InformationsListBlock = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  padding: 2rem;
  height: calc(100vh - 170px);
  overflow: hidden;
  background-color: #f8f8f8; /* 밝은 회색 배경 */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Sidebar = styled.div`
  width: 220px;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  margin-right: 2rem;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ListArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const InformationsList = ({ menu }) => {
  const [row, setRow] = useState([]);
  const [loading, setLoading] = useState(false); // ← 초기 false로 설정
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(10);
  const [MoreL, setMoreL] = useState(true);

  const fetchData = useCallback(async () => {
    //useCallback
    if (loading || !MoreL) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `http://openapi.seoul.go.kr:8088/78466a666f6a69683131375250655968/json/SemaPsgudInfoKorInfo/${startIndex}/${endIndex}/`
      );

      const moreData = response.data.SemaPsgudInfoKorInfo.row;

      if (!moreData || moreData.length === 0) {
        //데이터가 더 없으면
        setMoreL(false); // 로딩 끝
      } else {
        setStartIndex((prev) => prev + 10); //그렇지 않으면 startIndex와 endIndex에 10씩 더해서
        setEndIndex((prev) => prev + 10); // 랜더링후 원래 데이터(row)에 추가 (10개씩 랜더링하기 위함)
        setRow((prev) => prev.concat(moreData));
      }
    } catch (e) {
      console.error("데이터 불러오기 실패:", e); //불러오기 실패시 콘솔에 에러 메시지
    } finally {
      setLoading(false); // 로딩끝
    }
  }, [loading, MoreL, startIndex, endIndex]);

  useEffect(() => {
    if (menu === "all") {
      fetchData();
    } else {
      setEndIndex(1000);
    }
  }, [menu]);

  if (endIndex === 1000) {
    fetchData();
  }

  const filteredRow = useMemo(() => {
    if (!menu || menu === "all") return row; //메뉴가 선택되어지지 않았거나 전체일때

    return row
      .map((item) => ({
        ...item,
        // mnfct_year가 "연도미상"인 경우 "정보없음"으로 대체
        mnfct_year:
          item.mnfct_year === "연도미상" ? "undefined" : item.mnfct_year,
      }))
      .filter((item) => item.mnfct_year?.substring(0, 3) === menu); // menu와 매칭되는 연도만 필터링 (?는 이상값 반환을 위함
  }, [menu, row]);

  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const sampleRow = filteredRow[index];
      return (
        <Information
          sampleRow={sampleRow}
          key={key}
          style={style}
          index={index}
        />
      );
    },
    [filteredRow]
  );

  const onScroll = ({ clientHeight, scrollHeight, scrollTop }) => {
    //무한스크롤
    if (menu !== "all") return;
    if (scrollHeight - scrollTop - clientHeight < 100) {
      fetchData();
    }
  };

  return (
    <InformationsListBlock>
      <Sidebar>
        <InformationMenus />
      </Sidebar>
      <ListArea>
        {filteredRow.length === 0 ? (
          <div style={{ padding: "2rem", fontSize: "1.1rem", color: "#888" }}>
            해당 연도에 대한 정보가 없습니다.
          </div>
        ) : (
          <AutoSizer>
            {({ height, width }) => (
              <List
                width={width}
                height={height}
                rowCount={filteredRow.length}
                rowHeight={180}
                rowRenderer={rowRenderer}
                style={{ outline: "none", paddingBottom: "2rem" }}
                onScroll={onScroll}
              />
            )}
          </AutoSizer>
        )}
      </ListArea>
    </InformationsListBlock>
  );
};

export default InformationsList;
