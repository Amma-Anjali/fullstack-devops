import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/RESERVATIONS");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("DB ERROR:", error);
  }
};