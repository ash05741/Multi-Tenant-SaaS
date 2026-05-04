import express from "express";
import { createOrganization } from "../controllers/orgController.js";

const router = express.Router();

router.post("/", createOrganization);

export default router;