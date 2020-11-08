import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import generateToken from "../util/generateToken.js";

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
});

export const getUserDetails = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && user.matchPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
