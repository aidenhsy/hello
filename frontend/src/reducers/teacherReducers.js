import {
  TEACHER_DETAILS_FAIL,
  TEACHER_DETAILS_REQUEST,
  TEACHER_DETAILS_SUCCESS,
  TEACHER_LIST_FAIL,
  TEACHER_LIST_REQUEST,
  TEACHER_LIST_SUCCESS,
} from "../constants";

export const teacherListReducer = (state = { teachers: [] }, action) => {
  switch (action.type) {
    case TEACHER_LIST_REQUEST:
      return { ...state, loading: true };
    case TEACHER_LIST_SUCCESS:
      return { loading: false, teachers: action.payload };
    case TEACHER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teacherDetailsReducer = (state = { teacher: {} }, action) => {
  switch (action.type) {
    case TEACHER_DETAILS_REQUEST:
      return { loading: true };
    case TEACHER_DETAILS_SUCCESS:
      return { loading: false, teacher: action.payload };
    case TEACHER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
