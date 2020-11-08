import {
  getUsers,
  getUserDetails,
  authUser,
} from "../controllers/userControllers.js";
import express from "express";

const Router = express.Router();

Router.route("/").get(getUsers);
Router.route("/:id").get(getUserDetails);
Router.route("/api/users/login").post(authUser);

export default Router;
