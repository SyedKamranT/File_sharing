import express from 'express';

import User from '../models/User.js';




const router = express.Router();

// Route to fetch user info by ID
router.get("/user/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password"); // Exclude password
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

export default router
