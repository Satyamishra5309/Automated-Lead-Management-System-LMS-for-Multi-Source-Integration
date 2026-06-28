import fetchMetaLeads
from "../services/metaService.js";


export const getMetaLeads =
async (req,res)=>{

  try {

    const {
      accessToken,
      formId
    } = req.body;


    const data =
      await fetchMetaLeads(
        accessToken,
        formId
      );

    res.status(200).json(data);

  } catch(error){

    res.status(500).json({
      message:error.message
    });
  }
};