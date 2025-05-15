import React, { useEffect } from "react";
import "./PositionInfo.scss";

const PositionInfo = () => {
  useEffect(() => {
    // 네이버 지도 API 로드
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=98pvdelohd&callback=initializeMap";
    script.async = true;
    document.head.appendChild(script);

    // 콜백 함수: 지도 초기화
    window.initializeMap = function () {
      if (window.naver) {
        const mapOptions = {
          center: new window.naver.maps.LatLng(37.5665, 126.978), // 서울의 위도, 경도
          zoom: 10,
        };

        // 지도 객체 생성
        const map = new window.naver.maps.Map("map", mapOptions); // "map" id로 지도 초기화
      }
    };

    return () => {
      // 클린업: 스크립트를 제거하여 메모리 누수 방지
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div>
      <div className="mapIcon">
        {" "}
        {/*지도 + 아이콘 */}
        {/*지도는 사진으로 대체  */}
        <div id="map" className="map"></div>
        <div>
          {" "}
          {/*아이콘 공간 */}
          <div>편의시설 및 서비스</div>
          <ul>
            <li>
              <img
                className="icon"
                src="https://sema.seoul.go.kr/resources/assets/svg/icon-stroller.svg"
                alt="유모차"
              ></img>
              유모차 대여
            </li>
            <li>
              <img
                className="icon"
                src="https://sema.seoul.go.kr/resources/assets/svg/icon-locker.svg"
                alt="라커"
              ></img>
              물품 보관소
            </li>
            <li>
              <img
                className="icon"
                src="https://sema.seoul.go.kr/resources/assets/svg/icon-museumchair.svg"
                alt=""
              ></img>
              뮤지엄 체어
            </li>
            <li>
              <img
                className="icon"
                src="https://sema.seoul.go.kr/resources/assets/svg/icon-wheelchair.svg"
                alt=""
              ></img>
              휠체어 접근
            </li>
            <li>
              <img
                className="icon"
                src="https://sema.seoul.go.kr/resources/assets/svg/icon-elevator.svg"
                alt=""
              ></img>
              엘리베이터
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <strong>지하철 이용안내</strong>
          </li>
          <li>1호선: 시청역 1번 출구(서울시청 서소문청사 방면)</li>
          <li>2호선: 사청역 10, 11, 12번 출구</li>
          <li>5호선: 서대문역 5번 출구 또는 광화문역 6번 출구</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <strong>버스 이용 안내</strong>
          </li>
          <li>파란(간선)버스 : 172, 472, 600, 602번</li>
          <li>초록(지선)버스: 7019번</li>
          <li>'시청.서소문청사'정류장에서 하차</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <strong>자가용 이용 안내</strong>
          </li>
          <li>광화문에서 오실 때: 덕수궁 정문에서 우측의 샛길로 우회전</li>
          <li>
            남대문 쪽에서 오실 때: 광화문까지 직진하여 광화문 앞에서 U턴 후,
            덕수궁까지 직진하여 덕수궁 정문에서 우측의 샛길로 우회전
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <strong>주차 안내</strong>
          </li>
          <li>
            주차장 운영시간: 화~금 09:00~22:00 / 월,토,일,공휴일 09:00~21:00
          </li>
          <li>
            주차 요금: 평일(월~금) 5분당 400원, 토요일 및 공휴일 5분당 300원
          </li>
          <li>
            <strong>요금 할인</strong>(※ 할인 사유가 중복될 경우에는 그 중 높은
            할인율 적용)
          </li>
          <li>
            장애인, 국가유공자, 고엽제 후유증 환자 차량, 의사상자, 독립유공자 :
            80% 할인
          </li>
          <li>경형 자동차, 저공해 자동차 : 50% 할인</li>
          <li>다둥이행복카드 소지자(막내가 13세 이하): 2자녀 이상 50% 할인</li>
          <li>모범납세자(성실납세증 표지) : 발행일로부터 1년간 면제</li>
          <li>5.18유공자 : 1시간 범위 내 면제(초과시 50%할인)</li>
          <li>유료전시 관람자: 최초 20분 주차요금 면제</li>
          <li>
            ※ 미술관 내 주차시설이 협소하여 미술품 운반 및 업무용 차량 이외의
            일반 관람 차량은 주차가 어려우니 가급적 대중 교통수단을 이용하시기
            바랍니다. 12인승 초과 차량은 주차가 되지 않습니다.
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <strong>주소 안내</strong>
          </li>
          <li>서울시 중구 덕수궁길 61 (서소문동)</li>
          <li>문의처 : (02) 2124-8800</li>
        </ul>
      </div>
    </div>
  );
};

export default PositionInfo;
