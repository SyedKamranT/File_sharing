import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";
import Subscription from "../models/subscriptionModel.js";

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create Subscription
export const createSubscription = async (req, res) => {
  try {
    const { planId, userId } = req.body;

    if (!planId || !userId) {
      return res.status(400).json({ message: "Plan ID and User ID are required" });
    }

    const subscription = await razorpay.subscriptions.create({
      plan_id: planId,
      customer_notify: 1,
      total_count: 12, // Charges monthly for 12 months
    });

    // Save subscription details to MongoDB
    const newSubscription = new Subscription({
      userId,
      planId,
      subscriptionId: subscription.id,
      status: subscription.status,
    });

    await newSubscription.save();

    res.status(200).json({ subscription });
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Razorpay Webhook
export const verifyWebhook = async (req, res) => {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  const signature = req.headers["x-razorpay-signature"];

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  if (signature !== digest) {
    return res.status(400).json({ message: "Invalid Signature" });
  }

  const event = req.body.event;
  const subscriptionId = req.body.payload.subscription.entity.id;

  if (event === "subscription.activated" || event === "subscription.completed") {
    await Subscription.findOneAndUpdate(
      { subscriptionId },
      { status: "active" },
      { new: true }
    );
  } else if (event === "subscription.halted") {
    await Subscription.findOneAndUpdate(
      { subscriptionId },
      { status: "cancelled" },
      { new: true }
    );
  }

  res.status(200).json({ message: "Webhook verified" });
};
