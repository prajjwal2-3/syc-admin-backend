const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  id: Number,
  address: String,
  composition: String,
  buildInfo: String,
  financials: {
    purchasePrice: Number,
    shares:Number,
    rentalIncome: [Number],
    salePrice: Number,
    unleveredCFs: [Number],
    yieldOnCost: [Number],
    exitYield: Number,
    unleveredIRREM: String
  },
  imageArray: [String]
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
