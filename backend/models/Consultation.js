const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: String,

    dob: {
      type: String,
      required: true,
    },

    birthTime: String,

    birthPlace: String,

    consultationType: {
      type: String,
      required: true,
    },

    message: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Consultation",
  consultationSchema
);