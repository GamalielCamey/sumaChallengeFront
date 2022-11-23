import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_DETAIL = "GET_DETAIL";

export function getCharacters() {
  return async function (dispatch) {
    const json = await axios(`http://localhost:3000/`);
    return dispatch({
      type: GET_CHARACTERS,
      payload: json.data,
    });
  };
}

export function getDetail(url) {
  return async function (dispatch) {
    const link = {url};
    const result = await axios.post("http://localhost:3000/detail", link);
    return dispatch({
      type: GET_DETAIL,
      payload: result.data,
    });
  };
}
