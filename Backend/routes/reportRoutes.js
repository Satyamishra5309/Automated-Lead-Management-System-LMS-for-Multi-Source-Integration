import express from "express";

import protect
from "../middleware/authMiddleware.js";

import {

 exportExcelReport,

 exportPDFReport

}

from "../controllers/reportController.js";


const router =
 express.Router();


router.get(

 "/excel",

 protect,

 exportExcelReport
);


router.get(

 "/pdf",

 protect,

 exportPDFReport
);


export default router;