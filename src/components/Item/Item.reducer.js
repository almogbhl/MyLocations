import produce from "immer";

import { SEND_MAP_DATA,SEND_OLD_DATA } from "./Item.actions";

export const initialState = {
  mapData: {},
  oldData: {}
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SEND_MAP_DATA:
        draft.mapData = action.payload;
        break;
      case SEND_OLD_DATA:
        draft.oldData = action.payload;
        break;
    }
  });
};
