require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const consultationRoutes = require("./routes/consultationRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

connectDB();

const app = express();

/* MIDDLEWARE */

app.use(cors({
  origin: "*"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ROUTES */

app.get("/", (req, res) => {
  res.send("Astro Maarg API Running...");
});

app.use("/api/consultations", consultationRoutes);

/* ERROR HANDLER */

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASS);
});
