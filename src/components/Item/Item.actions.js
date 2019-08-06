export const SEND_MAP_DATA = "SEND_MAP_DATA";
export const SEND_OLD_DATA = "SEND_OLD_DATA";

export const sendMapData = data => ({
    type: SEND_MAP_DATA,
    payload: data
  });
  
export const sendOldData = data => ({
    type: SEND_OLD_DATA,
    payload: data
  });
  