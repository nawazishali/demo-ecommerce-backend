// grab the things we need
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a schema
var deviceSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  image_url: String
  // variants: {
  //   type: Schema.Types.ObjectId,
  //   ref: "DeviceVariant"
  // }
});

// the schema is useless so far
// we need to create a model using it
var Device = mongoose.model("Device", deviceSchema);

// make this available to our users in our Node applications
module.exports = Device;
