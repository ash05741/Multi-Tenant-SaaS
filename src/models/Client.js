import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    orgID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Organization",
    },
    email: {
        type: String,
        required: true,
    },

});

export default mongoose.model("Client", ClientSchema);
