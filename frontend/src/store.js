import allReducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};
const middleware = [thunk];
const store = createStore(
  allReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
