import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import teacherRoutes from "./routes/teacherRoutes.js";
const app = express();

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listening on ${PORT}`));

app.use(express.json());
app.use("/api/teachers", teacherRoutes);
