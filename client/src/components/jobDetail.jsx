import React from "react";
import { useEffect, useState,  } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const JobDetail = () =>{

var {id} = useParams();
const url = "http://localhost:4200/api/jobs/one/";
const updateStatusUrl = "http://localhost:4200/api/jobs/update/";
const [job, setJob] = useState({});
const [status, setStatus] = useState("");
const [show, setShow] = useState(false);


const toggleShow = () => setShow(!show);

useEffect(()=>{
    fetch(url+id)
    .then(res => res.json())
    .then(data => {
        setJob(data);
        setStatus(data.status);
    });
}, [setJob, id]);

const handleSelect = (eventkey) =>{
    setStatus(eventkey);
};

const handleSubmit = (e) =>{
    e.preventDefault();
    
    fetch(updateStatusUrl + id, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            status
        })
    }).then(res => res.json())
    .then(isUpdated => {
        if(isUpdated)
            setShow(true);
    });
}
    return(
        <Container style={{marginTop: "20px"}} >
             <Form className="text-center">
            <Form.Group >
                <Form.Label><h4>{job.summary}</h4></Form.Label>
            </Form.Group>
            <Form.Group >
                <Form.Label><h4>{job.description}</h4></Form.Label>
            </Form.Group>
            <Form.Group >
                <Form.Label><h4>Status:</h4></Form.Label>
                <DropdownButton variant="dark" title={status} value={status} onSelect={handleSelect}>
                            <Dropdown.Item eventKey={"open"}>
                                open
                            </Dropdown.Item> 
                            <Dropdown.Item eventKey={"cancelled"}>
                                cancelled
                            </Dropdown.Item> 
                            <Dropdown.Item eventKey={"in progress"}>
                                in progress
                            </Dropdown.Item> 
                            <Dropdown.Item eventKey={"completed"}>
                                completed
                            </Dropdown.Item> 
                </DropdownButton>
            </Form.Group>
            <Form.Group style={{marginTop: "20px"}} >
            <Button variant="success" onClick={handleSubmit}>
                Update
            </Button>
            </Form.Group>
        </Form>
        <ToastContainer  position="middle-end">
        <Toast show={show} onClose={toggleShow} >
          <Toast.Header>
        Job status updated!
          </Toast.Header>
        </Toast>
        </ToastContainer>
        </Container>

    )
}

export default JobDetail 