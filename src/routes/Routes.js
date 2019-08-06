import React from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "../components/WelcomePage/WelcomePage";
import Locations from "../components/Locations/Locations";
import Categories from "../components/Categories/Categories";
import AddLocation from "../components/AddLocation/AddLocation";
import AddCategory from "../components/AddCategory/AddCategory";
import EditCategory from "../components/EditCategory/EditCategory";
import EditLocations from "../components/EditLocations/EditLocations";
import MapPage from '../components/GoogleMap/MapPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <WelcomePage />} />
      <Route exact path="/locations" component={Locations} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/locations/add" component={AddLocation} />
      <Route exact path="/categories/add" component={AddCategory} />
      <Route path="/categories/edit/:id" component={EditCategory} />
      <Route path="/locations/edit/:id" component={EditLocations} />
      <Route path="/locations/map/:id" component={MapPage} />
    </Switch>
  );
};

export default Routes;
