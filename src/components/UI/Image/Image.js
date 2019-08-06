import React from 'react';
import styled from "styled-components";

const Image = ({url, description}) => {
    return (
        <S.Img src={url} alt={description} />
    );
};

export default Image;

const S = {};

S.Img = styled.img `
    height: 100%;
    min-height: 3.5rem;
    object-fit: contain;
    object-position: center;
`