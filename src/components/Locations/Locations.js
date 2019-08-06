import React from "react";
import { connect } from "react-redux";
import List from "../List/List";

const Locations = props => {
  return <List data={props.locationsList} path={props.match.path} />;
};

const mapStateToProps = state => ({
  locationsList: state.locations.locationsList
});

export default connect(
  mapStateToProps,
  null
)(Locations);
