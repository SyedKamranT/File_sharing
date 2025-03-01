import mongoose from 'mongoose';

const pricingSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  features: [String],
  planId: String
}, { collection: 'pricing' });

const pricing = mongoose.model('pricing', pricingSchema);
export default pricing;
