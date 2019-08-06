import produce from "immer";

import { ADD_CATEGORY_ITEM, REMOVE_CATEGORY_ITEM, EDIT_CATEGORY_ITEM } from './Category.constants';
import {SET_NEW_CATEGORY_ORDER} from '../List/List.actions';

export const initialState = {
  categoriesList: []
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_CATEGORY_ITEM:
       draft.categoriesList.push(action.payload);
       break;
      case REMOVE_CATEGORY_ITEM:
       draft.categoriesList = state.categoriesList.filter((item, index) => index !== action.payload);
       break;
      case EDIT_CATEGORY_ITEM:
       draft.categoriesList = state.categoriesList.map(item => {
         if(item === action.payload.oldCategoryName) {
          return item = action.payload.newCategoryName
         }
         return item
       });
       break;
       case SET_NEW_CATEGORY_ORDER:
        draft.categoriesList = action.payload;
        break;
    }
  });
};
