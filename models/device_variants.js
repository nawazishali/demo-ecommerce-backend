// grab the things we need
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a schema
var deviceVariantSchema = new Schema({
  device_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  storage: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  image_url: {
    type: String,
    required: true
  }
});

// the schema is useless so far
// we need to create a model using it
var DeviceVariant = mongoose.model("DeviceVariant", deviceVariantSchema);

// make this available to our users in our Node applications
module.exports = DeviceVariant;
