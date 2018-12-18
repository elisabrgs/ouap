import axios from "axios";
import {
  UPDATE_SEARCH_VALUE,
  GET_MOVIES_LIST,
  REDIRECT_TO_HOME
} from "./types";
import {
  TMDB_API_KEY,
  SEARCH_MOVIE_URL,
  QUERY,
  PAGE,
  INCLUDE_ADULT
} from "../config/keys";

export const updateSearchValue = searchValue => dispatch => {
  dispatch({
    type: UPDATE_SEARCH_VALUE,
    searchValue
  });
};

export const getMoviesListFromTMDb = (searchValue, actualPage) => dispatch => {
  axios
    .get(
      `${SEARCH_MOVIE_URL}${TMDB_API_KEY}${QUERY}${searchValue}${PAGE}${actualPage}${INCLUDE_ADULT}`
    )
    .then(json => {
      console.log(json);
      dispatch({
        type: GET_MOVIES_LIST,
        moviesList: json.data.results,
        actualPage: json.data.page,
        totalPages: json.data.total_pages,
        totalResults: json.data.total_results
      });
    });
};

export const redirectToHome = () => dispatch => {
  dispatch({
    type: REDIRECT_TO_HOME
  });
};
