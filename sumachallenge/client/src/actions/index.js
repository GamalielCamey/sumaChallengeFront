import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_DETAIL = "GET_DETAIL";
export const GET_CHARACTER_BY_NAME = "GET_CHARACTER_BY_NAME";
export const CLEAR_DETAIL = "CLEAR_DETAIL";

export function getCharacters() {
  return async function (dispatch) {
    const json = await axios(`https://suma-api.vercel.app/`);
    return dispatch({
      type: GET_CHARACTERS,
      payload: json.data,
    });
  };
}
export function clearDetail() {
  return {
    type: "CLEAR_DETAIL",
  };
}

export function getCharacterByName(payload) {
  return {
    type: GET_CHARACTER_BY_NAME,
    payload,
  };
}

export function getDetail(url) {
  return async function (dispatch) {
    const link = {url};
    const result = await axios.post("https://suma-api.vercel.app/detail", link);
    return dispatch({
      type: GET_DETAIL,
      payload: result.data,
    });
  };
}
