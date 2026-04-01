import { Reservation } from "../models/reservation.js";

const send_reservation = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { firstName, lastName, email, date, time, phone } = req.body;

    if (!firstName || !lastName || !email || !date || !time || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please Fill Full Reservation Form!",
      });
    }

    await Reservation.create({
      firstName,
      lastName,
      email,
      date,
      time,
      phone,
    });

    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export default send_reservation;