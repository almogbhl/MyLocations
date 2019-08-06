import {
  ADD_CATEGORY_ITEM,
  REMOVE_CATEGORY_ITEM,
  EDIT_CATEGORY_ITEM
} from "./Category.constants";

export const addCategoryItem = item => ({
  type: ADD_CATEGORY_ITEM,
  payload: item
});

export const removeCategoryItem = index => ({
  type: REMOVE_CATEGORY_ITEM,
  payload: index
});

export const editCategoryItem = ({oldCategoryName, newCategoryName}) => ({
  type: EDIT_CATEGORY_ITEM,
  payload: { oldCategoryName, newCategoryName }
});
