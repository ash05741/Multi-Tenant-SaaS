import express from "express";
import { createClient } from "../controllers/clientController.js";
import { tenantAuth } from "../middlewares/tenantAuth.js";

const router = express.Router();

router.post("/", tenantAuth, createClient);

export default router;