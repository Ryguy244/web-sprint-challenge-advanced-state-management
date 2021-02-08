import axios from "axios";
export const GET_DATA_START = "DATA_START";
export const GET_DATA_SUCCESS = "DATA_SUCCESS";
export const GET_DATA_FAIL = "DATA_FAIL";
export const DISPLAY_ALL_SMURFS = "DISPLAY_ALL_SMURFS";

export const getData = () => (dispatch) => {
  dispatch({ type: GET_DATA_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: res.data,
      });
      console.log(res, "nice");
    })
    .catch((err) => {
      console.log("error", err);
      dispatch({
        type: GET_DATA_FAIL,
        payload: `${err.message}`,
      });
    });
};
