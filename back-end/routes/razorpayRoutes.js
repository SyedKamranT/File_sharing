import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";
import crypto from "crypto";
import Subscription from "../models/subscriptionModel.js"; // Create a Subscription model

dotenv.config();
const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post("/subscribe", async (req, res) => {
  try {
    const { planId, userId } = req.body;

    if (!planId || !userId) {
      return res.status(400).json({ message: "Missing planId or userId" });
    }

    const subscription = await razorpay.subscriptions.create({
      plan_id: planId,
      customer_notify: 1,
      quantity: 1,
      total_count: 12,
    });

    // Save subscription details to MongoDB
    const newSubscription = new Subscription({
      userId,
      subscriptionId: subscription.id,
      planId,
      status: "created",
    });

    await newSubscription.save();

    res.json({
      subscriptionId: subscription.id,
      orderId: subscription.id, // Razorpay uses subscription ID as order ID
      razorpayKey: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Razorpay Subscription Error: ", error);
    res.status(500).json({ message: "Failed to create subscription" });
  }
});

export default router;
