import React from "react";
import styled from "styled-components";
import printIcons from "../../../utils/helpers/printIcons";

const MainButton = ({ label, icon }) => {
  
  return (
    <S.Button>
      {printIcons(icon)}
      {label}
    </S.Button>
  );
};

export default MainButton;

const S = {};

S.Button = styled.button`
  border: none;
  font-size: 2rem;
  color: inherit;
  background: none;
  cursor: pointer;
  display: inline-block;
  margin: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  padding: 15px 30px 15px 90px;
  transition: all 0.3s;
  background: #fcad26;
  color: #fff;
  text-align: center;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover {
    background: #f29e0d;
  }

  &:active {
    background: #f58500;
    top: 2px;
  }

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    line-height: 3;
    font-size: 140%;
    width: 60px;
    background: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 670px) {
    padding: 10px 15px 10px 55px;
    margin: 5px 10px;
    font-size: 1.3rem;

    &:before {
      width: 40px;
    }
  }
`;
