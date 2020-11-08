import mongoose from "mongoose";

const CourseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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

const User = mongoose.model("User", UserSchema);
export default User;
