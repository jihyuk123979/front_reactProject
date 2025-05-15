import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// 메뉴 데이터
const mainmenus = [
  {
    name: "product",
    text: "작품 보기",
  },
  {
    name: "inside",
    text: "시설정보",
  },
  {
    name: "position",
    text: "위치정보",
  },
];

const MainMenusBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 0.5rem 0;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const MainMenu = styled(NavLink)`
  font-size: 1.125rem;
  text-decoration: none;
  color: inherit;
  padding: 0.25rem 0.5rem;
  cursor: pointer;

  &:hover {
    color: gray;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid black;
    color: black;
    &:hover {
      color: black;
    }
  }
`;

// 대문자로 시작해야 컴포넌트로 인식됨!
const MainMenus = () => {
  return (
    <MainMenusBlock>
      {mainmenus.map((mainmenu) => (
        <MainMenu
          key={mainmenu.name}
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to={mainmenu.name === "product" ? "/" : `/${mainmenu.name}`}
        >
          {mainmenu.text}
        </MainMenu>
      ))}
    </MainMenusBlock>
  );
};

export default MainMenus;
