const Job = require("../models/job.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a Job
  const job = new Job({
    summary: req.body.summary,
    description: req.body.description,
    status: req.body.status,
    property: req.body.property,
    raised_by: req.body.raised_by
  });
  // Save Job in the database
  Job.create(job, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the job.",
      });
    else res.send(data);
  });
};

exports.getAll = (req, res) => {
  // Save Job in the database
  Job.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving the jobs.",
      });
    else res.send(data);
  });
}
;
exports.getOne = (req, res) => {
  // Save Job in the database
  console.log(req.params.id);
  var id = req.params.id;
  Job.getOne(id, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving the job.",
      });
    else res.send(data);
  });
};

exports.update = (req, res) => {
  console.log(req.body.status);
  var newStatus = {
    status:  req.body.status,
    id: req.params.id
  }
  Job.update(newStatus, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred updating the job.",
      });
    else res.send(data);
  });
};
