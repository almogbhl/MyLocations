import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import GoogleMapContainer from "./GoogleMap";
import BubbleLoader from '../../utils/loaders/BubbleLoader/BubbleLoader';

const MapPage = props => {
    if(props.mapData){
        return (
            <S.Box>
            <GoogleMapContainer marker={props.mapData} zoom={15} />
          </S.Box>
        )
    } else {
        return (
            <BubbleLoader />
        )
    }
 
};

const mapStateToProps = state => ({
  mapData: state.mapPage.mapData
});

export default connect(
  mapStateToProps,
  null
)(MapPage);

const S = {};

S.Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  padding: 2rem;
  border: 1px solid lightgrey;

  @media (max-width: 670px) {
    height: 400px;
  }

  @media (min-height: 975px) {
    height: 779px;
  }
`;
