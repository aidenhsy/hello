import {
  getUsers,
  getUserDetails,
  authUser,
  registerUser,
  getUserProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";
import express from "express";

const Router = express.Router();

Router.route("/").get(getUsers);
Router.route("/:id").get(getUserDetails);
Router.route("/login").post(authUser);
Router.route("/register").post(registerUser);
Router.route("/profile").get(protect, getUserProfile);

export default Router;
