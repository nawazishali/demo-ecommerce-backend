var express = require("express");
var router = express.Router();
var VariantModel = require("../models/device_variants");

/* GET variants listing. */
router.get("/", (req, res, next) => {
  // res.send("respond with a variants variant");
  VariantModel.find({})
    .then(variants => res.send(variants))
    .catch(err => res.send(err.message));
});

router.post("/", (req, res, next) => {
  var newVariant = new VariantModel(req.body);

  newVariant
    .save()
    .then(variant => res.send(variant))
    .catch(err => res.send(err.message));
});

router.put("/:variantId", (req, res, next) => {
  VariantModel.findOneAndUpdate({ _id: req.params.variantId }, req.body)
    .then(variant => res.send(variant))
    .catch(err => res.send(err.message));
});

router.get("/:variantId", (req, res, next) => {
  VariantModel.findOne({ _id: req.params.variantId })
    .then(variant => res.send(variant))
    .catch(err => res.send(err.message));
});

router.get("/by_device/:deviceId", (req, res, next) => {
  VariantModel.find({ device_id: req.params.deviceId })
    .then(variant => res.send(variant))
    .catch(err => res.send(err.message));
});

router.delete("/:variantId", (req, res, next) => {
  VariantModel.findOneAndRemove({ _id: req.params.variantId })
    .then(deletedVariant => res.send(deletedVariant))
    .catch(err => res.send(err.message));
});

module.exports = router;
