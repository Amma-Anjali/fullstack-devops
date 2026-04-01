import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import reservationRoutes from "./routes/reservationRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/restaurant")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/v1", reservationRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});