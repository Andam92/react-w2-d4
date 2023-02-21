import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavouritesAction,
  removeFromFavouritesAction,
} from "../redux/actions";

const Job = ({ data }) => {
  const favouriteJobs = useSelector((state) => state.favourites.content);
  console.log("OGGI STEFANO HA SBAGLIATO", favouriteJobs);
  const dispatch = useDispatch();
  return (
    <Row
      className="mx-0 mt-3 p-3 justify-content-between"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={2}>
        {favouriteJobs.includes(data.company_name) ? (
          <Button
            onClick={() =>
              dispatch(removeFromFavouritesAction(data.company_name))
            }
          >
            ❌
          </Button>
        ) : (
          <Button
            onClick={() => dispatch(addToFavouritesAction(data.company_name))}
          >
            ❤️
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default Job;
