import React from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const CreateJobs = () =>{

const propertyUrl = "http://localhost:4200/api/properties/all";
const createJobUrl = "http://localhost:4200/api/jobs/create";

const [properties, setProperties] = useState([]);
const [summary, setSummary] = useState("");
const [description, setDescription] = useState("");
const [username, setUsername] = useState("");
const [selectedProperty, setSelectedProperty] = useState({name:"select property", id: ""});
const [show, setShow] = useState(false);


const toggleShow = () => setShow(!show);
useEffect(()=>{
    fetch(propertyUrl)
    .then(res => res.json())
    .then(data => setProperties(data));
}, [setProperties]);

const handleSubmit = (e) =>{
    e.preventDefault();

    fetch(createJobUrl,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            summary,
            description,
            status: "open",
            property: selectedProperty.id,
            raised_by: username
        })
    }).then(res => res.json())
    .then(isCreated => {
        if(isCreated)
            setShow(true);
    });
}

const handleSelect = (eventkey, event) =>{
    setSelectedProperty({name: eventkey, id: event.target.id});
}
    return(
        <Container style={{marginTop: "20px"}}>
          <Form className="text-center">
            <Form.Group >
                <Form.Label>Summary:</Form.Label>
                <Form.Control type="text"  style={{textAlign:"center"}} value={summary} onChange={(e) => setSummary(e.target.value)} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Description:</Form.Label>
                <Form.Control type="text"  style={{textAlign:"center"}} value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Raised By:</Form.Label>
                <Form.Control type="text"  style={{textAlign:"center"}} value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group >
                <Form.Label>Property:</Form.Label>
                <DropdownButton variant="dark" title={selectedProperty.name} value={selectedProperty.name} onSelect={handleSelect}>
                    {properties && properties.map((property) =>{
                        return (
                            <Dropdown.Item key={property.property_id} id={property.property_id} eventKey={property.name}>
                                {property.name}
                            </Dropdown.Item>
                        )
                    })}
                </DropdownButton>
            </Form.Group>
            <Form.Group style={{marginTop: "20px"}} >
            <Button variant="success" onClick={handleSubmit}>
                Create Job
            </Button>
            </Form.Group>
        </Form>
        <ToastContainer position="middle-end">
        <Toast show={show} onClose={toggleShow} >
          <Toast.Header>
        Job created!
          </Toast.Header>
        </Toast>
        </ToastContainer>
        </Container>
    )
}

export default CreateJobs 