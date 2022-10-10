import { FINISH_TRAVEL,DB_HEROKU} from "./actionTypes";
import axios from "axios";

export const finishTravel = (id,mail) => {
  console.log(id,mail)
  return async function (dispatch) {
    try {
       let respuesta=await axios.put(`/carts/finish/${id}`)
       let result = await axios.get(`/shopping/${mail}`);
      return dispatch({
        type: FINISH_TRAVEL,
        payload:result.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};