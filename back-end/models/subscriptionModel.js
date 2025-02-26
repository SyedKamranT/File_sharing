import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  subscriptionId: { type: String, required: true },
  planId: { type: String, required: true },
  status: { type: String, enum: ["created", "active", "cancelled"], default: "created" },
}, { timestamps: true });

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;
