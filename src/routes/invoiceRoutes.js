import express from "express";
import { createInvoice, getInvoices, getInvoiceById, generateInvoicePDF } from "../controllers/invoiceController.js";
import { tenantAuth } from "../middlewares/tenantAuth.js";

const router = express.Router();

router.post("/", tenantAuth, createInvoice);
router.get("/", tenantAuth, getInvoices)
router.get("/:id", tenantAuth, getInvoiceById);
router.get("/:id/pdf", tenantAuth, generateInvoicePDF);

export default router;