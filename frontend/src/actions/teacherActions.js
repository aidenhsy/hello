import axios from "axios";
import {
  TEACHER_DETAILS_FAIL,
  TEACHER_DETAILS_REQUEST,
  TEACHER_DETAILS_SUCCESS,
  TEACHER_LIST_FAIL,
  TEACHER_LIST_REQUEST,
  TEACHER_LIST_SUCCESS,
} from "../constants";

export const listTeachers = () => async (dispatch) => {
  try {
    dispatch({
      type: TEACHER_LIST_REQUEST,
    });
    const { data } = await axios.get("/api/teachers");
    dispatch({
      type: TEACHER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEACHER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTeacherDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TEACHER_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`/api/teachers/${id}`);
    dispatch({
      type: TEACHER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEACHER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
