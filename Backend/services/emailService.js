import nodemailer from "nodemailer";

const sendEmailAlert = async (lead) => {

  try {

    const transporter =
      nodemailer.createTransport({

        service: "gmail",

        auth: {

          user:
            process.env.EMAIL_USER,

          pass:
            process.env.EMAIL_PASS
        }
      });


    await transporter.sendMail({

      from:
        process.env.EMAIL_USER,

      to:
        process.env.ADMIN_EMAIL,

      subject:
        "New Lead Received",

      html: `

        <h2>New Lead Alert</h2>

        <p>Name: ${lead.name}</p>

        <p>Phone: ${lead.phone}</p>

        <p>Source: ${lead.source}</p>

      `
    });

    console.log(
      "Email sent successfully"
    );

  } catch(error){

    console.log(
      error.message
    );
  }
};

export default sendEmailAlert;