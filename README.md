# Multi-Tenant SaaS Backend 🚀

A robust, multi-tenant backend architecture built with Node.js and Express. This API handles secure organization-level data segregation and features real-time, server-side PDF generation.

## 🔥 Key Features

*   **Multi-Tenant Architecture:** Custom middleware ensuring data isolation between different organizations/businesses using the `x-org-id` header.
*   **Relational Data Flow:** Seamlessly links Organizations, Clients, and Invoices using MongoDB.
*   **Dynamic PDF Engine:** Uses `pdfkit` to generate and stream customized invoice PDFs directly to the client without saving files to the server's hard drive.
*   **Secure API Design:** Protected routes requiring specific tenant headers for database access and validation.

## 🛠️ Tech Stack

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB & Mongoose
*   **Document Generation:** PDFKit

## 📂 Project Structure

This project follows a clean MVC (Model-View-Controller) architecture:
```text
├── src/
│   ├── models/
│   │   ├── Client.js         # Mongoose schema for customers
│   │   └── Invoice.js        # Mongoose schema linking Client & Org
│   ├── controllers/
│   │   ├── clientController.js   # Logic for creating/fetching clients
│   │   └── invoiceController.js  # Logic for invoices and PDF streams
│   ├── routes/
│   │   ├── clientRoutes.js   # Endpoint mapping for clients
│   │   └── invoiceRoutes.js  # Endpoint mapping for invoices
│   ├── middleware/
│   │   └── tenantAuth.js     # The "Bouncer" verifying the x-org-id
│   └── app.js                # Main Express application setup
├── .env                      # Secret environment variables (ignored by Git)
├── .gitignore                # Git exclusions (node_modules, PDFs, env)
├── package.json              # Project dependencies
└── README.md                 # You are here