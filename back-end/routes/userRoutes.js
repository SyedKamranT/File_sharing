import express from 'express';

import User from '../models/User.js';




const router = express.Router();

// Route to fetch user info by ID
router.get("/user/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password"); // Exclude password

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            profilePicture: user.profilePicture || null, // Ensure profilePicture is included
        });
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({ message: "Server Error" });
    }
});



export default router
