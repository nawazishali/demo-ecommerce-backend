var express = require("express");
var router = express.Router();
var DeviceModel = require("../models/device");

/* GET users listing. */
router.get("/", (req, res, next) => {
  // res.send("respond with a devices");
  DeviceModel.find({})
    .then(devices => res.send(devices))
    .catch(err => res.send(err.message));
});

router.post("/", (req, res, next) => {
  var newDevice = new DeviceModel({
    name: req.body.name,
    image_url: req.body.image_url
  });

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

router.delete("/:deviceId", (req, res, next) => {
  DeviceModel.findOneAndRemove({ _id: req.params.deviceId })
    .then(deletedDevice => res.send(deletedDevice))
    .catch(err => res.send(err.message));
});

module.exports = router;
