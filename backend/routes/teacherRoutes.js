import {
  getTeachers,
  getTeacherDetails,
} from "../controllers/teacherControllers.js";
import express from "express";

const Router = express.Router();

Router.route("/").get(getTeachers);
Router.route("/:id").get(getTeacherDetails);

export default Router;
