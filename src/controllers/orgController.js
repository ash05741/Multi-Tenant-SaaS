import Organization from "../models/org.js";
import crypto from "crypto";


export const createOrganization = async (req, res) => {

    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Organization name is required" });
    }

    const apiKey = crypto.randomBytes(16).toString("hex");

    const org = await Organization.create({ name, apiKey });

    return res.status(201).json({ org });

};

