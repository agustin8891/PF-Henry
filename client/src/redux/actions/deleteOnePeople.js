import { DELETE_ONE_PEOPLE,DB_HEROKU} from "./actionTypes";
import axios from "axios";

export const deleteOnePeople = (id,numberPeople,email) => {
  return async function (dispatch) {
    try {
      
       let respuesta=await axios.put(`/cartdetails/delete`,{id,numberPeople})
       
       let resp = await axios.get(`/carts/${email}`);
      return dispatch({
        type: DELETE_ONE_PEOPLE,
        payload:resp.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};