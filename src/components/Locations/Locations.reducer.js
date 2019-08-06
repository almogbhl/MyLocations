import produce from "immer";

import { ADD_LOCATION_ITEM, REMOVE_LOCATION_ITEM, EDIT_LOCATION_ITEM } from "./Locations.constants";
import {SET_NEW_LOCATION_ORDER} from "../List/List.actions";

export const initialState = {
  locationsList: []
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_LOCATION_ITEM:
        draft.locationsList.push(action.payload);
        break;
      case REMOVE_LOCATION_ITEM:
        draft.locationsList = state.locationsList.filter((item, index) => index !== action.payload);
        break;
        case EDIT_LOCATION_ITEM:
          draft.locationsList = state.locationsList.map(item => {
            if(item.name.value === action.payload.oldFormData.name.value) {
             return item = action.payload.formData
            }
            return item
          });
          break;
          case SET_NEW_LOCATION_ORDER:
            draft.locationsList = action.payload;
            break;
    }
  });
};
