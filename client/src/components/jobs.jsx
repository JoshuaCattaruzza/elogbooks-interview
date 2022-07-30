import React from "react";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom';
const Jobs = () =>{

const url = "https://api.joshuacattaruzza.com/api/jobs/all";

const [jobs, setJobs] = useState([]);
const navigate = useNavigate();

useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setJobs(data));
}, [setJobs]);

    return(
        <Container style={{marginTop: "20px"}}>
        <Table striped bordered hover>
            <thead>
                <tr> 
                    {/* ideally headers would also be generated dynamically  */}
                    <th>
                        #ID
                    </th>
                    <th>
                        Summary
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Status
                    </th>
                    <th>
                        Property Name
                    </th>
                    <th>
                        Raised By
                    </th>
                </tr>
                </thead>
                <tbody>
                {jobs && jobs.map((job)=>{
                    return(
                        <tr onClick={()=>{navigate(`/jobs/${job.job_id}`)}} key={job.job_id}>
                            <td>
                                {job.job_id}
                            </td>
                            <td>
                                {job.summary}
                            </td>
                            <td>
                                {job.description}
                            </td>
                            <td>
                                {job.status}
                            </td>
                            <td>
                                {job.property}
                            </td>
                            <td>
                                {job.raised_by}
                            </td>
                        </tr>
           
                    )
                })}
                </tbody>
         
        </Table>
        </Container>
    )
}

export default Jobs 