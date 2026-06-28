import express from "express";

import {
 getMetaLeads
}
from "../controllers/integrationController.js";

import protect
from "../middleware/authMiddleware.js";

const router =
 express.Router();

router.post(
  "/meta",
  protect,
  getMetaLeads
);

export default router;