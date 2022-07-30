import { Routes, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Jobs from "./components/jobs";
import CreateJobs from "./components/createJob";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import JobDetail from "./components/jobDetail";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container >
      <ButtonGroup className="mb-2">
      <Link to={"/jobs"}>
      <Button variant="light" style={{marginRight:"20px"}}>View Jobs</Button>
      </Link>
      <Link to={"/createJobs"}>
      <Button variant="light">Create Job</Button>
      </Link>
      </ButtonGroup>


      
      </Container>
    </Navbar>
      <Routes>
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/createJobs" element={<CreateJobs />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
      </Routes>
    </>
  );
}

export default App;
