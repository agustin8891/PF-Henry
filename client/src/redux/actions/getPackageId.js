import { GET_PACKAGE_ID,DB_HEROKU } from "./actionTypes";
import axios from "axios";

export function getPackageId(id) {
  return async function (dispatch) {
    try {
      var response = await axios.get(`/packages/` + id);
      return dispatch({
        type: GET_PACKAGE_ID,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
