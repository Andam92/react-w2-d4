import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const removeFavourites = useDispatch();

  const favouriteList = useSelector((state) => state.favourites.content);
  console.log(favouriteList);

  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>
              <Row className="justify-content-between">
                <Col xs={6}>
                  <h1>YourFavourites</h1>
                </Col>
                <Link to={"/"}>
                  <Col xs={6}>
                    <p>Back to Home</p>
                  </Col>
                </Link>
              </Row>
            </ListGroup.Item>
            {favouriteList.map((companyName) => {
              return (
                <ListGroup.Item>
                  {companyName}{" "}
                  <button
                    onClick={() =>
                      removeFavourites({
                        type: "REMOVE_FAV",
                        payload: companyName,
                      })
                    }
                  >
                    ❌
                  </button>
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
