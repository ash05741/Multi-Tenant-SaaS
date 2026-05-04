import Client from "../models/Client.js";

export const createClient = async (req, res) => {
    const { name, email } = req.body;
    const orgID = req.headers["x-org-id"];
    if (!name || !email || !orgID) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const client = await Client.create({ name, email, orgID });
    return res.status(201).json({ client });
};