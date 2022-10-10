import { REMOVE_DETAIL_CART ,DB_HEROKU} from "./actionTypes";
import axios from "axios";

export const removeDetailCart = (id,mail) => {
  return async function (dispatch) {
    try {
      let result = await axios.delete(`/cartdetails/${id}`);
      let resp = await axios.get(`/carts/${mail}`);

      return dispatch({
        type: REMOVE_DETAIL_CART,
        payload:resp.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};