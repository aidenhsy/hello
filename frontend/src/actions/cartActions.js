import axios from "axios";
import { CART_ADD_ITEM } from "../constants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/teachers/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      teacher: data._id,
      name: data.name,
      image: data.image,
      subject: data.subject,
      price: data.price,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
