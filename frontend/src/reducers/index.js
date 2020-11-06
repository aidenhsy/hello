import { combineReducers } from "redux";
import { teacherListReducer } from "./teacherReducers";

const allReducers = combineReducers({
  teacherList: teacherListReducer,
});

export default allReducers;
