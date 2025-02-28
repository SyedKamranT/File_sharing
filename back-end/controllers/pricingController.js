import pricing from '../models/PricingModel.js';

// Fetch all pricing plans
export const getPricingPlans = async (req, res) => {
  try {
    const plans = await pricing.find();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pricing plans', error });
  }
};
