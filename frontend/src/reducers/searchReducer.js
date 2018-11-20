import { UPDATE_SEARCH_VALUE } from '../actions/types'

const initialState = { 
  text: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_VALUE:
      return {
        ...state, 
        text: action.text
      };
    default:
      return state;
  }
};