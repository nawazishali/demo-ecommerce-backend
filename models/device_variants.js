// grab the things we need
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a schema
var deviceVariantSchema = new Schema({
  device_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  price: Number,
  color: String,
  storage: String,
  quantity: Number,
  image_url: String
});

// the schema is useless so far
// we need to create a model using it
var DeviceVariant = mongoose.model("DeviceVariant", deviceVariantSchema);

// make this available to our users in our Node applications
module.exports = DeviceVariant;
