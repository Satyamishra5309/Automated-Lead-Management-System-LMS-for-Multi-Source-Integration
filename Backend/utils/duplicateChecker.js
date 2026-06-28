import Lead from "../model/Lead.js";

const isDuplicateLead =
 async (lead) => {

  const exists =
    await Lead.findOne({

      $or: [

        {
          email: lead.email
        },

        {
          phone: lead.phone
        }
      ]
    });

  return exists;
};

export default isDuplicateLead;