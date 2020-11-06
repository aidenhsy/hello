import { getTeachers } from "../controllers/teacherControllers.js";
import express from "express";

const Router = express.Router();

Router.route("/").get(getTeachers);

export default Router;
