import React from "react";
import styled from "styled-components";
import Image from "../UI/Image/Image";

const Header = () => {
  const url =
    "https://cdn.iconscout.com/icon/premium/png-256-thumb/global-locations-3-970936.png";
  return (
    <S.Header>
      <S.Title>My Locations</S.Title>
      <Image url={url} description="locations" />
    </S.Header>
  );
};

export default Header;

const S = {};

S.Header = styled.header`
  flex-basis: 10%;
  min-height: 4rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: lightgray 1px solid;
`;
S.Title = styled.h1`
  font-size: 2.6rem;
  font-family: "Lato";
  line-height: 1.3;
  font-weight: 300;
`;
