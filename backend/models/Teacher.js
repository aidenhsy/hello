import mongoose from "mongoose";

const TeacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  subject: String,
  rating: Number,
  numReviews: Number,
  price: Number,
});

const Teacher = mongoose.model("Teacher", TeacherSchema);
export default Teacher;
