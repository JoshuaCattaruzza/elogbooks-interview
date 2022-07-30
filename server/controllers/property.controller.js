const Property = require("../models/property.model.js");

exports.create = (req, res) =>{
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      // Create a Property
      const property = new Property({
        name: req.body.name
      });
      // Save Property in the database
      Property.create(property, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the property."
          });
        else res.send(data);
      });
}

exports.getAll = (req, res) =>{
      // Save Property in the database
      Property.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the property."
          });
        else res.send(data);
      });
}