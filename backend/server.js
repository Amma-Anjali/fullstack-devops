import dotenv from "dotenv";
import app from "./app.js";

dotenv.config(); // ✅ load env first

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});