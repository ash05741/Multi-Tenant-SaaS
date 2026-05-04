import express from "express";
import orgRoutes from "./routes/orgRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import invoiceRoutes from "./routes/invoiceRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/org", orgRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/invoice", invoiceRoutes);


app.get("/", (req, res) => {
    res.send("Server is running");
});

export default app;