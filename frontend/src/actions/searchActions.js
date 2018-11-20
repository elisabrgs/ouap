import { UPDATE_SEARCH_VALUE } from "./types";

export const updateSearchValue = text => dispatch => {
  dispatch({
    type: UPDATE_SEARCH_VALUE,
    text
  });
};