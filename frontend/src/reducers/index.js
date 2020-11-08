import { combineReducers } from "redux";
import {
  userListReducer,
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./userReducers";
import { cartReducer } from "./cartReducers";

const allReducers = combineReducers({
  userList: userListReducer,
  userDetails: userDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default allReducers;
