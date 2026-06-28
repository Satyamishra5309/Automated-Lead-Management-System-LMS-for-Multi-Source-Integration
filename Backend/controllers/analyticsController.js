import Lead from "../model/Lead.js";

export const getOverviewStats =
 async (req, res) => {

  try {


    const totalLeads =
      await Lead.countDocuments();



    const newLeads =
      await Lead.countDocuments({
        status: "new"
      });


    const contactedLeads =
      await Lead.countDocuments({
        status: "contacted"
      });


    const convertedLeads =
      await Lead.countDocuments({
        status: "converted"
      });


    const lostLeads =
      await Lead.countDocuments({
        status: "lost"
      });


    const conversionRate =

      totalLeads > 0

      ? (
          (convertedLeads / totalLeads) * 100
        ).toFixed(1)

      : 0;


    const sourceStats =
      await Lead.aggregate([

        {
          $group: {

            _id: "$source",

            count: {
              $sum: 1
            }
          }
        }
      ]);



    const statusStats =
      await Lead.aggregate([

        {
          $group: {

            _id: "$status",

            count: {
              $sum: 1
            }
          }
        }
      ]);


    res.status(200).json({

      totalLeads,

      newLeads,

      contactedLeads,

      convertedLeads,

      lostLeads,

      conversionRate,

      sourceStats,

      statusStats
    });

  }

  catch (error) {

    res.status(500).json({

      message: error.message
    });
  }
};


export const getDailyLeads =
 async (req,res)=>{

  try {

    const dailyStats =
      await Lead.aggregate([

        {
          $group:{

            _id:{

              $dateToString:{

                format:
                  "%Y-%m-%d",

                date:
                  "$createdAt"
              }
            },

            count:{

              $sum:1
            }
          }
        },

        {
          $sort:{
            _id:1
          }
        }
      ]);


    res.status(200).json(
      dailyStats
    );

  } catch(error){

    res.status(500).json({
      message:error.message
    });
  }
};


export const getConversionRate =
 async(req,res)=>{

  try {

    const total =
      await Lead.countDocuments();

    const converted =
      await Lead.countDocuments({

        status:"converted"
      });


    const rate =
      total===0
        ? 0
        : (
            converted/total
          )*100;


    res.status(200).json({

      conversionRate:
        rate.toFixed(2)
    });

  } catch(error){

    res.status(500).json({
      message:error.message
    });
  }
};