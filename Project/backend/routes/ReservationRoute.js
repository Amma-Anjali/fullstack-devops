import express from "express";
import Reservation from "../models/reservation.js";

const router = express.Router();

router.post("/reservation", async (req, res) => {
  try {
    console.log("Request received:", req.body);

    const newReservation = new Reservation(req.body);
    await newReservation.save();

    console.log("Saved to MongoDB");

    res.status(201).json({
      success: true,
      message: "Reservation Created Successfully",
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      success: false,
      message: "Error creating reservation",
    });
  }
});

export default router;