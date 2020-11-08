import { combineReducers } from "redux";
import { userListReducer, userDetailsReducer } from "./userReducers";
import { cartReducer } from "./cartReducers";

const allReducers = combineReducers({
  userList: userListReducer,
  userDetails: userDetailsReducer,
  cart: cartReducer,
});

export default allReducers;
