const sql = require("./db.js");

const Property = function (property) {
  this.name = property.name;
};

Property.create = (newProperty, result) => {
  sql.query("INSERT INTO properties SET ?", newProperty, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created: ", { newProperty });
    result(null, { newProperty });
  });
};

Property.getAll = (result) => {
  sql.query("SELECT * FROM properties", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("properties:", res);
    result(null, res);
  });
};

module.exports = Property;
