const nodemailer = require("nodemailer");

const sendEmail = async (consultationData) => {
  try {
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

    const mailOptions = {
      from: process.env.EMAIL_USER,

      to: "shouryasaxena7705@gmail.com",

      subject: "New Astro Maarg Consultation Request",

      html: `
        <h2>New Consultation Request</h2>

        <p><strong>Full Name:</strong> ${consultationData.fullName}</p>

        <p><strong>Phone:</strong> ${consultationData.phone}</p>

        <p><strong>Email:</strong> ${consultationData.email}</p>

        <p><strong>Date of Birth:</strong> ${consultationData.dob}</p>

        <p><strong>Birth Time:</strong> ${consultationData.birthTime}</p>

        <p><strong>Birth Place:</strong> ${consultationData.birthPlace}</p>

        <p><strong>Consultation Type:</strong> ${consultationData.consultationType}</p>

        <p><strong>Message:</strong> ${consultationData.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email Sent Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;