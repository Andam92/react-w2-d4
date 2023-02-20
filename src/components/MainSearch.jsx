import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchJobsAction } from "../redux/actions";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const dispatch = useDispatch(); // --> metodo di redux per usare il dispatch
  const [query, setQuery] = useState("");
  const jobsArray = useSelector((state) => state.jobs.jobList.data); // --> accedo allo store generale con l'hook useSelector. Questo hook accetta come parametro lo state e ritorna le proprietà della porzione di stato che ci interessano
  /*  const [jobs, setJobs] = useState([]); */

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*     try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    } */
    dispatch(fetchJobsAction(baseEndpoint, query + "&limit=20"));
  };

  console.log(jobsArray);
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3 d-flex align-items-center">
          <h1>Remote Jobs Search</h1>
          <Link to={"/favourites"} className={"mx-5"}>
            Your Favourites! ⭐
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsArray.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
