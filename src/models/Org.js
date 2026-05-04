import mongoose from "mongoose"

const OrganizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    apiKey: {
        type: String,
        required: true,
        unique: true,
    },
    webhookUrl: {
        type: String,
    },

});

export default mongoose.model("Organization", OrganizationSchema);