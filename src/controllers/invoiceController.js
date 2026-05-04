import Invoice from "../models/Invoice.js";
import PDFDocument from "pdfkit";

export const createInvoice = async (req, res) => {
    const { clientID, amount, dueDate, status } = req.body;
    const orgID = req.headers["x-org-id"];
    if (!clientID || !amount || !dueDate || !status) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const invoice = await Invoice.create({ orgID, clientID, amount, dueDate, status });
    return res.status(201).json({ invoice });
}

export const getInvoices = async (req, res) => {
    try {
        const orgID = req.orgId || req.headers["x-org-id"];
        const invoices = await Invoice.find({ orgID: orgID });

        return res.status(200).json({ invoices });
    } catch (err) {
        return res.status(500).json({ message: "Error fetching invoices" });
    }
}

export const getInvoiceById = async (req, res) => {
    try {
        const orgID = req.orgId || req.headers["x-org-id"];
        const InvoiceID = req.params.id;

        const invoice = await Invoice.findOne({ _id: InvoiceID, orgID: orgID });
        if (!invoice) {
            return res.status(400).json({ message: "Invoice not found" })
        }

        return res.status(200).json({ invoice })
    } catch (err) {
        return res.status(500).json({ message: "Error fetching invoice" });
    }
}

export const generateInvoicePDF = async (req, res) => {
    try {
        const orgID = req.orgId || req.headers["x-org-id"];
        const InvoiceID = req.params.id;

        const invoice = await Invoice.findOne({ _id: InvoiceID, orgID: orgID });
        if (!invoice) {
            return res.status(400).json({ message: "Invoice not found" })
        }

        res.setHeader('Content-Type', 'application/pdf')
        res.setHeader('Content-Disposition', 'attachment;filename="invoice.pdf"')

        const doc = new PDFDocument();
        doc.pipe(res);

        doc.fontSize(20).text("INVOICE", { align: "center" })
        doc.moveDown(); // Adds a blank line

        doc.fontSize(14).text(`Invoice ID: ${invoice._id}`);
        // Note: Change 'amount', 'status', etc. to match exactly what is in your Invoice schema
        doc.text(`Amount: $${invoice.amount}`);
        doc.text(`Status: ${invoice.status.toUpperCase()}`);
        doc.text(`Due Date: ${new Date(invoice.dueDate).toLocaleDateString()}`);

        doc.end();

    } catch (err) {
        return res.status(500).json({ message: "Error fetching invoice" });
    }
}
