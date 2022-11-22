import axios from "axios";

export const GET_CARACTERS = "GET_CHARACTERS";

export function getCharacters() {
  return async function (dispatch) {
    const json = await axios(`http://localhost:3000/`);
    return dispatch({
      type: "GET_CHARACTERS",
      payload: json.data,
    });
  };
}
