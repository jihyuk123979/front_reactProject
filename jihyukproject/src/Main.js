import React from "react";
import InformationsList from "./InformationsList";
import { Outlet, useParams, useLocation } from "react-router-dom";
import "./Main.scss";
import MainMenus from "./MainMenus";

const Main = () => {
  const location = useLocation();
  const parmas = useParams();
  const menu = parmas.menu || "all";
  return (
    <div>
      <div className="MainTop">
        <div className="Logo">
          <a href="/">
            <img
              src="https://sema.seoul.go.kr/resources/assets/svg/o_symbol_b_v.svg"
              alt="서울시립 박물관 전시품 목록"
            ></img>
          </a>
        </div>
        <div className="Menutitle">
          <h2 className="title">서울 시립 미술관 전시품목</h2>
          <MainMenus />
        </div>
      </div>
      {location.pathname !== "/inside" && location.pathname !== "/position" && (
        <InformationsList menu={menu} />
      )}
      <Outlet />
    </div>
  );
};

export default Main;
