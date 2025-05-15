import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const menus = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "195",
    text: "1950",
  },
  {
    name: "196",
    text: "1960",
  },
  {
    name: "197",
    text: "1970",
  },
  {
    name: "198",
    text: "1980",
  },

  {
    name: "199",
    text: "1990",
  },

  {
    name: "200",
    text: "2000",
  },
  {
    name: "201",
    text: "2010",
  },
  {
    name: "202",
    text: "2020",
  },
  {
    name: "undefined",
    text: "연도미상",
  },
];

const MenusBlock = styled.div`

  background-color : rgba($color: #410f0f, $alpha: 1.0)
 
  padding: 1rem;
  width: 100px;
  margin: 0 ;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    display: flex;
    
  }
`;
const Menu = styled(NavLink)`
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: #767676;
  padding-bottom: 0.25rem;

  &:hover {
    color: black;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid black;
    color: black;
    &:hover {
      color: black;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;
const InformationMenus = () => {
  return (
    <MenusBlock>
      {menus.map((menuItem) => (
        <Menu
          key={menuItem.name}
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to={menuItem.name === "all" ? "/" : `/${menuItem.name}`}
          // onClick={() => onSelect(menu.name)}
        >
          {menuItem.text}
        </Menu>
      ))}
    </MenusBlock>
  );
};

export default React.memo(InformationMenus);
