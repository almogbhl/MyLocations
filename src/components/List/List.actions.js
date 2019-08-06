export const SET_NEW_LOCATION_ORDER = "SET_NEW_LOCATION_ORDER";
export const SET_NEW_CATEGORY_ORDER = "SET_NEW_CATEGORY_ORDER";

export const setNewLocationOrder = data => ({
  type: SET_NEW_LOCATION_ORDER,
  payload: data
});

export const setNewCategoryOrder = data => ({
  type: SET_NEW_CATEGORY_ORDER,
  payload: data
});
