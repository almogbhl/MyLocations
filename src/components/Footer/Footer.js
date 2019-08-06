import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainButton from "../UI/Buttons/MainButton";

const Footer = () => {
  return (
    <S.Footer>
      <Link to="/locations">
        <MainButton label="Locations" icon="location" />
      </Link>
      <Link to="/categories">
        <MainButton label="Categories" icon="category" />
      </Link>
    </S.Footer>
  );
};

export default Footer;

const S = {};

S.Footer = styled.footer`
  flex-basis: 10%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: lightgray 1px solid;
`;
