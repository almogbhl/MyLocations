import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Item from "../Item/Item";
import ToolButton from "../UI/Buttons/ToolButton";
import generateUniqueId from "../../utils/helpers/generateUniqueId";
import sortByAlphabeticalOrder from "../../utils/helpers/sortByAlphabeticalOrder";
import randomOrder from "../../utils/helpers/randomOrder";
import { setNewCategoryOrder, setNewLocationOrder } from "./List.actions";

const handleSort = (type, props, path) => {
  if(props.data === undefined) {
     return;
  }
  if (type === "sorted") {
    if (path === "locations") {
      const newDataOrder = sortByAlphabeticalOrder(props.data, path);
      props.do_setNewLocationOrder(newDataOrder);
    } else {
      const newDataOrder = sortByAlphabeticalOrder(props.data, path);
      props.do_setNewCategoryOrder(newDataOrder);
    }
  } else {
    if (path === "locations") {
      const newDataOrder = randomOrder(props.data, path);
      props.do_setNewLocationOrder(newDataOrder);
    } else {
      const newDataOrder = randomOrder(props.data, path);
      props.do_setNewCategoryOrder(newDataOrder);
    }
  }
};

const handleAddButton = (props, address) => {
  props.history.push(address);
};

const List = props => {
  const path = props.path.slice(1);
  const title = path.toUpperCase();
  const address = `${path}/add`;

  return (
    <>
      <S.ListTopBar>
        <S.Title>{title}</S.Title>
        <S.ToolBox>
          <ToolButton
            margin="0px 0px 0px 1rem"
            icon="unsorted"
            color="pastel"
            onClick={() => handleSort("unsorted", props, path)}
          />
          <ToolButton
            margin="0px 0px 0px 1rem"
            icon="sorted"
            color="purple"
            onClick={() => handleSort("sorted", props, path)}
          />

          <ToolButton
            margin="0px 0px 0px 1rem"
            icon="add"
            color="green"
            onClick={() => handleAddButton(props, address)}
          />
        </S.ToolBox>
      </S.ListTopBar>

      <S.ListBox>
        {props.data &&
          props.data.map((item, index) => (
            <Item
              key={generateUniqueId()}
              data={item}
              listType={path}
              index={index}
            />
          ))}
      </S.ListBox>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    do_setNewCategoryOrder: data => dispatch(setNewCategoryOrder(data)),
    do_setNewLocationOrder: data => dispatch(setNewLocationOrder(data))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(List)
);

const S = {};

S.ListBox = styled.ul`
  flex-basis: 80%;
  border-radius: 0.4rem;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0 0.2rem 0.8rem DimGrey;
  flex: 1;
`;

S.ListTopBar = styled.div`
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

S.Title = styled.h1`
  color: #17aa56;
`;

S.ToolBox = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
