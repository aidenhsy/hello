import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listTeachers } from "../actions/teacherActions";
import components from "../components";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listTeachers());
  }, [dispatch]);
  const teacherList = useSelector((state) => state.teacherList);
  const { loading, teachers, error } = teacherList;
  return (
    <div>
      {teachers.map((teacher) => (
        <components.Teacher teacher={teacher} />
      ))}
    </div>
  );
};

export default HomeScreen;
