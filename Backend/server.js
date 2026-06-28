import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import protect from "./middleware/authMiddleware.js";
import integrationRoutes from "./routes/integrationRoutes.js";
import startLeadSyncJob from "./jobs/syncLeadsJob.js";
import analyticsRoute from "./routes/analyticsRoute.js";
import leadRoutes from "./routes/leadRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";





const app = express();

app.use(cors());
app.use(express.json());
connectDB();
startLeadSyncJob();

app.get(
  "/protected",
  protect,
  (req,res)=>{

    res.json({
      message:"protected route"
    });
});

app.use(
 "/api/integrations",
 integrationRoutes
);
app.use("/api/auth", authRoutes);

app.use(

 "/api/analytics",

 analyticsRoute
);
app.use(
 "/api/leads",
 leadRoutes
);
app.use(
 "/api/reports",
 reportRoutes
)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});