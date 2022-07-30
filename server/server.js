const cors = require("cors");
const propertyRoutes = require("./routes/property.route.js");
const jobRoutes = require("./routes/job.route.js");
const express = require("express");
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
  };
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.join("/var/www/html/elogbooks-interview/client", 'build')));
app.use("/api/properties", propertyRoutes);
app.use("/api/jobs", jobRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
