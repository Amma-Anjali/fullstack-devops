import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  date: String,
  time: String,
});

export default mongoose.model("Reservation", reservationSchema);