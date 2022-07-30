const property = require("../controllers/property.controller.js")

var router = require("express").Router();

router.post("/create", property.create);

router.get("/all", property.getAll);

module.exports = router;