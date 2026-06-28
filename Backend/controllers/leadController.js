import Lead from "../model/Lead.js";


export const getLeads =
 async (req,res)=>{

  try {

    const {

      source,

      status,

      campaign

    } = req.query;


    let filter = {};


    if(source){

      filter.source = source;
    }


    if(status){

      filter.status = status;
    }


    if(campaign){

      filter.campaign = campaign;
    }


    const leads =
      await Lead.find(filter)
      .sort({

        createdAt:-1
      });


    res.status(200).json(
      leads
    );

  } catch(error){

    res.status(500).json({

      message:error.message
    });
  }
};



export const searchLeads =
 async (req,res)=>{

  try {

    const { query }
      = req.query;


    const leads =
      await Lead.find({

        $or:[

          {
            name:{
              $regex:query,

              $options:"i"
            }
          },

          {
            email:{
              $regex:query,

              $options:"i"
            }
          },

          {
            phone:{
              $regex:query,

              $options:"i"
            }
          }
        ]
      });


    res.status(200).json(
      leads
    );

  } catch(error){

    res.status(500).json({
      message:error.message
    });
  }
};



export const updateLead = async (req,res)=>{

  try{

    const { status, assignedTo } = req.body;

    const lead =
      await Lead.findByIdAndUpdate(

        req.params.id,

        {
          status,
          assignedTo
        },

       { returnDocument: "after" }
      );

    res.status(200).json(lead);

  } catch(error){

    res.status(500).json({
      message:error.message
    });
  }
}



export const deleteLead =
 async(req,res)=>{

  try {

    await Lead.findByIdAndDelete(

      req.params.id
    );

    res.status(200).json({

      message:"Lead deleted"
    });

  } catch(error){

    res.status(500).json({
      message:error.message
    });
  }
};