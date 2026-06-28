import twilio from "twilio";

const client =
 twilio(

  process.env.TWILIO_SID,

  process.env.TWILIO_AUTH_TOKEN
 );


const sendSMSAlert =
 async (lead)=>{

  try {


await client.messages.create({

  body:
   "Hello from LMS",

  messagingServiceSid:
   "MG10df771b4093000b590a4537a2d05570",

  to:
   process.env.ADMIN_PHONE
});

    console.log(
      "SMS sent"
    );

  }  catch(error){

 console.log(
  "SMS provider error"
 );

 console.log(error);

 console.log(
  "SID =",
  process.env.TWILIO_SID
);

console.log(
  "TOKEN =",
  process.env.TWILIO_AUTH_TOKEN
);

console.log(
  "PHONE =",
  process.env.TWILIO_PHONE
);

}
};

export default sendSMSAlert;