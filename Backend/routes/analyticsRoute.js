import express from "express";

import protect
from "../middleware/authMiddleware.js";

import {

 getOverviewStats,

 getDailyLeads,

 getConversionRate

}

from "../controllers/analyticsController.js";


const router =
 express.Router();


router.get(

 "/overview",

 protect,

 getOverviewStats
);


router.get(

 "/daily",

 protect,

 getDailyLeads
);


router.get(

 "/conversion",

 protect,

 getConversionRate
);


export default router;