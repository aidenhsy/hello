import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const CourseSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: String,
    rating: Number,
    numReviews: Number,
  },
  {
    timestamp: true,
  }
);

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isTeacher: {
    type: Boolean,
    required: true,
    default: false,
  },
  courses: [CourseSchema],
  image: String,
  description: String,
  subjectToLearn: String,
  subjectToTeach: String,
  rating: Number,
  numReviews: Number,
  price: Number,
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", UserSchema);
export default User;
