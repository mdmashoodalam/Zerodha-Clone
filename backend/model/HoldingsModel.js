const{ model } = require ("mongoose");

const {HoldingsSchema} = require ('../Schemas/HoldingsSchema');

const HoldingsModel = new model("holdings", HoldingsSchema);

module.exports = { HoldingsModel };