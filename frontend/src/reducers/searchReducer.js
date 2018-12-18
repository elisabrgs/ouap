import { UPDATE_SEARCH_VALUE, GET_MOVIES_LIST, REDIRECT_TO_HOME } from "../actions/types";

const initialState = {
  redirectToMainPage: false,
  searchValue: "",
  moviesList: [],
  actualPage: 0,
  totalPages: 0,
  totalResults: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue,
        actualPage: 1,
      };
    case GET_MOVIES_LIST:
      return {
        ...state,
        moviesList: action.moviesList,
        actualPage: action.actualPage,
        totalPages: action.totalPages,
        totalResults: action.totalResults,
        redirectToMainPage: true
      };
    case REDIRECT_TO_HOME:
      return {
        state : initialState
      }
    default:
      return state;
  }
};
