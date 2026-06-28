import Lead from "../model/Lead.js";

import isDuplicateLead
from "./duplicateChecker.js";

import sendEmailAlert
from "../services/emailService.js";

import sendSMSAlert
from "../services/smsService.js";


const processLeadBatch =
 async (leads, normalizeFn) => {

  for(const lead of leads){

    const normalizedLead =
      normalizeFn(lead);


    const duplicate =
      await isDuplicateLead(
        normalizedLead
      );


    if(!duplicate){

      const savedLead =
        await Lead.create(
          normalizedLead
        );

      sendEmailAlert(
        savedLead
      );

      sendSMSAlert(
        savedLead
      );

      console.log(
        "Lead inserted"
      );
    }
  }
};

export default processLeadBatch;