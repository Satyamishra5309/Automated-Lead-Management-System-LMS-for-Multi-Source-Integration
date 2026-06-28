import cron from "node-cron";

import processLeadBatch
from "../utils/processLeadBatch.js";

import {
 normalizeWebsiteLead,
 normalizeMetaLead,
 normalizeGoogleLead
}
from "../utils/normalizeLead.js";

import fetchGoogleLeads from "../services/googleAdsService.js";
import fetchMetaLeads from "../services/metaService.js";
import fetchWebsiteLeads from "../services/websiteService.js";

const startLeadSyncJob = () => {

 cron.schedule(
 "0 0 * * *",

 async()=>{

   try{


     const websiteLeads =
       await fetchWebsiteLeads();

     await processLeadBatch(

       websiteLeads,

       normalizeWebsiteLead
     );


     const metaLeads =
       await fetchMetaLeads();

     await processLeadBatch(

       metaLeads,

       normalizeMetaLead
     );


     const googleLeads =
       await fetchGoogleLeads();

     await processLeadBatch(

       googleLeads,

       normalizeGoogleLead
     );


     console.log(
      "Sync complete"
     );

   }

   catch(error){

     console.log(
      error.message
     );
   }
 }
)
};

export default startLeadSyncJob;