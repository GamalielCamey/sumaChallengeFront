import {GET_CHARACTERS} from "../actions";
import {GET_DETAIL} from "../actions";

let initialState = {character: [], characters: []};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        allCaracters: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        character: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
