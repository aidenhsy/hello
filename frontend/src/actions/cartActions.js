import axios from "axios";
import { CART_ADD_ITEM } from "../constants";

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/teachers/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: data,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
