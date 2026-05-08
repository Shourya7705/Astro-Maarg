const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (data) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "shouryasaxena7705@gmail.com",
      subject: "New Consultation Form",
      html: `
        <h2>New Booking</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    console.log(response);

  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
