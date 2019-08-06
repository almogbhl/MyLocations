import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ToolButton from "../UI/Buttons/ToolButton";
import { removeCategoryItem } from "../Categories/Categories.actions";
import { removeLocationItem } from "../Locations/Locations.actions";
import BubbleLoader from "../../utils/loaders/BubbleLoader/BubbleLoader";
import { sendMapData, sendOldData } from "./Item.actions";

class Item extends Component {
  state = {
    height: "50px",
    showMore: false,
    type: "",
    isLocation: false,
    isLoading: true
  };

  componentDidMount() {
    const type = this.props.listType;

    if (type === "locations") {
      this.setState({
        type,
        isLocation: true,
        isLoading: false
      });
    }
    this.setState({ type, isLoading: false });
  }

  handleClick = height => {
    if (this.state.height === "50px") {
      this.setState({ height, showMore: true });
    } else {
      this.setState({ height: "50px", showMore: false });
    }
  };

  onRemoveClick = () => {
    const type = this.state.type;
    const index = this.props.index;
    const { do_removeCategoryItem, do_removeLocationItem } = this.props;

    switch (type) {
      case "categories":
        do_removeCategoryItem(index);
        break;
      case "locations":
        do_removeLocationItem(index);
        break;
      default:
        break;
    }
  };

  printInfoBox = (type, data) => {
    if (type === "categories") {
      return (
        <S.InfoBox onClick={() => this.handleClick("100px")}>{data}</S.InfoBox>
      );
    }

    const newData = [];
    for (let key in data) {
      const helper = {
        key: key,
        value: data[key].value
      };
      newData.push(helper);
    }

    return newData.map((item, index) => {
      if (item.key === "marker") {
        return;
      }
      if (index === 0) {
        return (
          <S.InfoBox
            key={item.value}
            showMore={this.state.showMore}
            onClick={() => this.handleClick("100px")}
          >
            <S.Info> {item.value}</S.Info>
          </S.InfoBox>
        );
      }
      return (
        <S.InfoBox
          key={item.value}
          showMore={this.state.showMore}
          onClick={() => this.handleClick("100px")}
        >
          <S.Info>{item.key}: </S.Info>
          <S.Info> {item.value}</S.Info>
        </S.InfoBox>
      );
    });
  };

  handleMapClick = data => {
    this.props.do_sendMapData({ marker: data.marker });
    this.props.history.push(`/locations/map/${data.name.value}`);
  };

  handleEditClick = data => {
    const type = this.props.listType;
    let editUrl = "";

    if (type === "locations") {
      editUrl = `/${type}/edit/${data.name.value}`;
    } else {
      editUrl = `/${type}/edit/${data}`;
    }

    this.props.do_sendOldData({ data: data });
    this.props.history.push(editUrl);
  };

  render() {
    const { height, showMore, isLocation, isLoading } = this.state;
    const type = this.props.listType;
    const { data } = this.props;

    if (isLoading) {
      return <BubbleLoader />;
    } else {
      return (
        <S.Item showMore={showMore} height={height}>
          {this.printInfoBox(type, data)}

          <S.ToolBox>
            {isLocation && (
              <ToolButton
                icon="map"
                color="blue"
                margin="0px 1rem 0px 0px"
                onClick={() => this.handleMapClick(data)}
              />
            )}
            <ToolButton
              icon="edit"
              color="yellow"
              margin="0px 1rem 0px 0px"
              onClick={() => this.handleEditClick(data)}
            />
            <ToolButton
              icon="remove"
              color="red"
              onClick={this.onRemoveClick}
            />
          </S.ToolBox>
        </S.Item>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    do_removeCategoryItem: index => dispatch(removeCategoryItem(index)),
    do_removeLocationItem: index => dispatch(removeLocationItem(index)),
    do_sendMapData: data => dispatch(sendMapData(data)),
    do_sendOldData: data => dispatch(sendOldData(data))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Item)
);

const S = {};

S.Item = styled.li`
  padding: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  height: ${props => props.height};
  transition: height 0.5s ease-in;
  border: 1px solid lightgrey;

  &:active {
    background: skyblue;
  }

  &:nth-child(even) {
    background: white;
  }

  &:nth-child(odd) {
    background: #ecf0f1;
  }

  &:hover {
    background: #fcad26;
  }
`;

S.InfoBox = styled.div`
  flex-basis: ${props => (props.showMore ? "20%" : "95%")};
  height: inherit;
  display: ${props => (!props.showMore ? "none" : "flex")};
  transition: display 0.5s ease-in;
  flex-direction: column;
  justify-content: center;
  color: black;

  &:first-child {
    display: flex;
    font-weight: bold;
  }

  &:hover {
    color: white;
  }
`;

S.ToolBox = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  flex-basis: 5%;
  justify-content: space-between;
`;

S.Info = styled.div`
  margin-bottom: 0.5rem;
  color: inherit;
`;
