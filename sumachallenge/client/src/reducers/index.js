import {GET_CHARACTERS, GET_DETAIL, GET_CHARACTER_BY_NAME} from "../actions";

let initialState = {character: [], characters: [], allCharacters: []};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        allCharacters: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        character: action.payload,
      };
    case GET_CHARACTER_BY_NAME:
      const char = state.allCharacters;
      const charFilter = char.filter((el) => el.name.match(action.payload));

      console.log(charFilter);
      return {
        ...state,
        characters: charFilter,
      };
    default:
      return state;
  }
}

export default rootReducer;
