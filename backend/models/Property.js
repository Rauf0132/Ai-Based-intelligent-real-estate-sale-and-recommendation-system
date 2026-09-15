const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    type: { type: String, enum: ['sale', 'rent'], default: 'sale' },
    bedrooms: { type: Number },
    bathrooms: { type: Number },
    area: { type: Number },
    images: [{ type: String }],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Property', PropertySchema);

