import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const mainActions = {
  GET_ALL_SUGGESTIONS: "MAIN.GET_ALL_SUGGESTIONS",
  SET_OUTFIT_LIST: "MAIN.SET_OUTFIT_LIST",
};

export const setOutfitList = (outfitList) => {
  return {
    type: mainActions.SET_OUTFIT_LIST,
    outfitList,
  };
};

export const getMainActions = (dispatch) => {
  return {
    getAllSuggestions: (content) => dispatch(getAllSuggestions(content)),
    setOutfitList: (outfitList) => dispatch(setOutfitList(outfitList)),
  };
};

const getAllSuggestions = (userId) => {
  return async (dispatch) => {
    const response = await api.getAllSuggestions(userId);
    if (response.error) {
      console.log("response", response);
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { outfitList } = response?.data;
      dispatch(setOutfitList(outfitList));
      return outfitList;
    }
  };
};
