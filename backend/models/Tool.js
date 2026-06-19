import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  reviewer_name: { type: String, required: true },
  reviewer_rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const toolSchema = new Schema({
  name: { type: String, required: true },
  developer: { type: String, required: true },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  accessType: { type: String, required: true },
  interfaceType: { type: String, required: true },
  licenseType: { type: String, required: true },
  hasApi: { type: Boolean, default: false },
  hasMobileApp: { type: Boolean, default: false },
  hasPluginSystem: { type: Boolean, default: false },
  hasVision: { type: Boolean, default: false },
  hasVoice: { type: Boolean, default: false },
  gallery: [
    {
      original: { type: String, required: true },
    },
  ],
  releaseYear: { type: String },
  contextWindow: { type: String },
  legalStatus: { type: String },
  pricingDetails: { type: String },
  reviews: [reviewSchema],
});

export const Tool = model("Tool", toolSchema);
