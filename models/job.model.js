const sql = require("./db.js");

const Job = function(job) {
    this.summary = job.summary;
    this.description = job.description;
    this.status = job.status;
    this.property = job.property;
    this.raised_by = job.raised_by;
};

Job.create = (newJob, result) => {
    sql.query("INSERT INTO jobs SET ?", newJob, (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          console.log("created: ", { newJob });
          result(null, {isCreated: true});
    })
};

Job.getAll = (result) =>{
    sql.query("SELECT job_id, summary, description, status, name AS property, raised_by FROM `jobs` INNER JOIN properties ON jobs.property=properties.property_id", (err, res) =>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          console.log("jobs:", res);
          result(null, res);
    });
}
Job.getOne = (id, result) =>{
    sql.query(`SELECT job_id, summary, description, status, name AS property, raised_by FROM jobs INNER JOIN properties ON jobs.property=properties.property_id WHERE job_id = ${id}`, (err, res) =>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          console.log("jobs:", res);
          result(null, res[0]);
    });
}
Job.update = (newStatus, result) =>{
    var { id, status } = newStatus;

    sql.query(`UPDATE jobs SET status = '${status}' WHERE job_id = ${id}`, (err, res) =>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          console.log("updated: ", res.message);
          result(null, {isUpdated: true});
    });
}

module.exports = Job;