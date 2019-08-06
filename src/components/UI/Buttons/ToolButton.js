import React from "react";
import styled from "styled-components";
import printIcons from "../../../utils/helpers/printIcons";

const handleClick = onClick => {
  if (onClick !== undefined) onClick();
};

const ToolButton = ({ icon, color, margin, onClick }) => {
  let newColor = "";
  switch (color) {
    case "red":
      newColor = "#CB4E4E";
      break;
    case "green":
      newColor = "#2ac56c";
      break;
    case "blue":
      newColor = "#4593E3";
      break;
    case "yellow":
      newColor = "#FCD04B";
      break;
    case "purple":
      newColor = "#9E54BD";
      break;
    case "pastel":
      newColor = "#ff6b6b";
      break;

    default:
      break;
  }

  return (
    <S.Button
      margin={margin}
      color={newColor}
      onClick={() => handleClick(onClick)}
    >
      {printIcons(icon)}
    </S.Button>
  );
};

export default ToolButton;

const S = {};

S.Button = styled.button`
  border: none;
  background: ${props => props.color};
  border-radius: 7px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s;
  position: relative;
  margin: ${props => props.margin};

  &:active {
    top: 2px;
  }
`;
