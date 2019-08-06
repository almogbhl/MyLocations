import { combineReducers } from "redux";

import categoriesReducer from "../components/Categories/Categories.reducer";
import locationsReducer from "../components/Locations/Locations.reducer";
import mapPageReducer from "../components/Item/Item.reducer";


const rootReducer = combineReducers({
  categories: categoriesReducer,
  locations: locationsReducer,
  mapPage: mapPageReducer
});

export default rootReducer;
