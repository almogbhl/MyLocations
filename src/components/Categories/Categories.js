import React from "react";
import { connect } from "react-redux";
import List from "../List/List";

const Categories = props => {
  return <List data={props.categoriesList} path={props.match.path} />;
};

const mapStateToProps = state => ({
  categoriesList: state.categories.categoriesList
});

export default connect(
  mapStateToProps,
  null
)(Categories);
