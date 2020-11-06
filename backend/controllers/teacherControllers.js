import asyncHandler from "express-async-handler";
import Teacher from "../models/Teacher.js";

export const getTeachers = asyncHandler(async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
});
