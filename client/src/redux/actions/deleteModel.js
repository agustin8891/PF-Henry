import { DELETE_MODEL ,DB_HEROKU} from "./actionTypes";
import axios from "axios";

export const deleteModel = (id, model) => {
  return async function (dispatch) {
    try {
      let result = await axios.delete(`/${model}/${id}`);
      return dispatch({
        type: DELETE_MODEL,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
