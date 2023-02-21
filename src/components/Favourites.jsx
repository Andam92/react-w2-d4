import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavouritesAction } from "../redux/actions";

const Favourites = () => {
  const dispatch = useDispatch();

  const favouriteList = useSelector((state) => state.favourites.content);
  console.log(favouriteList);

  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>
              <Row className="justify-content-between">
                <Col xs={4}>
                  <h1>YourFavourites</h1>
                </Col>
                <Link to={"/"}>
                  <Col xs={12}>
                    <p>Back to Home</p>
                  </Col>
                </Link>
              </Row>
            </ListGroup.Item>
            {favouriteList.map((companyName) => {
              return (
                <ListGroup.Item>
                  <div className="d-flex justify-content-between">
                    {companyName}
                    <button
                      onClick={() =>
                        dispatch(removeFromFavouritesAction(companyName))
                      }
                    >
                      ❌
                    </button>
                  </div>{" "}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
