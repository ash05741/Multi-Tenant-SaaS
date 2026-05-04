import Organization from "../models/org.js";

export const tenantAuth = async (req, res, next) => {
    const apiKey = req.headers["x-api-key"];
    if (!apiKey) {
        return res.status(401).json({ message: "API key is required" });
    }

    const org = await Organization.findOne({ apiKey });
    if (!org) {
        return res.status(401).json({ message: "Invalid API key" });
    }

    req.org = org;
    next();
};