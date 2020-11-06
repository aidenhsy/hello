import { combineReducers } from "redux";
import { teacherListReducer, teacherDetailsReducer } from "./teacherReducers";
import { cartReducer } from "./cartReducers";

const allReducers = combineReducers({
  teacherList: teacherListReducer,
  teacherDetails: teacherDetailsReducer,
  cart: cartReducer,
});

export default allReducers;
