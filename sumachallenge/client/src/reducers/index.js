import {GET_CARACTERS} from "../actions";

let initialState = {allCaracters: [], characters: []};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARACTERS:
      return {
        ...state,
        characters: action.payload,
        allCaracters: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
