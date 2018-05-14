var express = require("express");
var router = express.Router();
var DeviceModel = require("../models/device");

router.get("/", (req, res, next) => {
  // res.send("respond with a devices");
  DeviceModel.find({})
    .then(devices => res.send(devices))
    .catch(err => res.send(err.message));
});

router.post("/", (req, res, next) => {
  var newDevice = new DeviceModel(req.body);

  newDevice
    .save()
    .then(device => res.send(device))
    .catch(err => res.send(err.message));
});

router.put("/:deviceId", (req, res, next) => {
  DeviceModel.findOneAndUpdate({ _id: req.params.deviceId }, req.body)
    .then(device => res.send(device))
    .catch(err => res.send(err.message));
});

router.get("/:deviceId", (req, res, next) => {
  DeviceModel.findOne({ _id: req.params.deviceId })
    .then(device => res.send(device))
    .catch(err => res.send(err.message));
});

//Need to figure out how to get through this part. But this is just for learning,
// It's not good for performance once the array starts growing.

// router.get("/with_variants/:deviceId", (req, res, next) => {
//   DeviceModel.findOne({ _id: req.params.deviceId })
//     .populate({
//       path: "variants",
//       model: "DeviceVariant",
//       match: { device_id: req.params.deviceId }
//     })
//     .then(device => res.send(device))
//     .catch(err => res.send(err.message));
// });

router.delete("/:deviceId", (req, res, next) => {
  DeviceModel.findOneAndRemove({ _id: req.params.deviceId })
    .then(deletedDevice => res.send(deletedDevice))
    .catch(err => res.send(err.message));
});

module.exports = router;
