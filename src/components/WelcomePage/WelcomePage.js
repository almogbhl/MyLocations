import React from "react";
import styled from "styled-components";

const WelcomePage = () => {
  return (
      <S.TitleBox>
          <S.Title>WELCOME ALL!</S.Title>
      </S.TitleBox>
  )
};

export default WelcomePage;

const S = {};

S.TitleBox = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

S.Title = styled.h1 `
    color: #44464A;
    font-family: 'Lato';
    font-size: 5rem;
`