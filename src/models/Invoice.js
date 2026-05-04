import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
    orgID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Organization",
    },
    clientID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Client",
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["paid", "unpaid", "partially paid", "pending"],
        default: "unpaid",
    },
    dueDate: {
        type: Date,
        required: true,
    },

});

export default mongoose.model("Invoice", InvoiceSchema);