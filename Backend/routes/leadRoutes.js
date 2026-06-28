import express from "express";

import protect
from "../middleware/authMiddleware.js";

import {

  getLeads,

  searchLeads,

  updateLead,

  deleteLead

}

from "../controllers/leadController.js";


const router =
 express.Router();


router.get(
 "/",
 protect,
 getLeads
);


router.get(
 "/search",
 protect,
 searchLeads
);


router.put("/:id", protect, updateLead);


router.delete(
 "/:id",
 protect,
 deleteLead
);


export default router;