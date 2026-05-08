const Consultation = require("../models/Consultation");

const sendEmail = require("../utils/sendEmail");

const createConsultation = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      dob,
      birthTime,
      birthPlace,
      consultationType,
      message,
    } = req.body;

    const consultation = await Consultation.create({
      fullName,
      phone,
      email,
      dob,
      birthTime,
      birthPlace,
      consultationType,
      message,
    });

    // SEND EMAIL
    try{await sendEmail({
      fullName,
      phone,
      email,
      dob,
      birthTime,
      birthPlace,
      consultationType,
      message,
    });}
    catch (mailError) {
    console.log("Email failed to send, but data was saved:", mailError);
}

    res.status(201).json({
      success: true,
      message: "Consultation Submitted Successfully",
      consultation,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find();

    res.status(200).json({
      success: true,
      consultations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createConsultation,
  getConsultations,
};