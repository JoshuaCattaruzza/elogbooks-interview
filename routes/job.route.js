const job = require("../controllers/job.controller.js")

var router = require("express").Router();

router.post("/create", job.create);

router.get("/all", job.getAll);

router.get("/one/:id", job.getOne);

router.patch("/update/:id", job.update);

module.exports = router;