import express from 'express';
import { getPricingPlans } from '../controllers/pricingController.js';

const router = express.Router();

// Route to get pricing plans
router.get('/pricing', getPricingPlans);

export default router;
