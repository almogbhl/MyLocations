import React from "react";
import styled from "styled-components";

const Options = ({ data }) => {
  return (
    <>
      {data.map(item => (
        <S.Option key={item}>{item}</S.Option>
      ))}
    </>
  );
};

export default Options;

const S = {};

S.Option = styled.option`
  height: 3rem;
  font-size: 1.5rem;
  border: 2px solid gray;
  width: 20rem;
  padding: 0.5rem;

  @media (max-width: 670px) {
    margin: 0.5rem 0;
  }
`;
