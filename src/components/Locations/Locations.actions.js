import { ADD_LOCATION_ITEM,REMOVE_LOCATION_ITEM, EDIT_LOCATION_ITEM } from "./Locations.constants";

export const addLocationItem = item => ({
  type: ADD_LOCATION_ITEM,
  payload: item
});

export const removeLocationItem = index => ({
  type: REMOVE_LOCATION_ITEM,
  payload: index
});

export const editLocationItem = ({oldFormData, formData}) => ({
  type: EDIT_LOCATION_ITEM,
  payload: { oldFormData, formData }
});

