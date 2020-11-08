import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUserDetails } from "../actions/userActions";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import components from "../components";

const UserDisplayScreen = ({ match, history }) => {
  const [hours, setHours] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUserDetails(match.params.id));
  }, [dispatch, match]);
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, user, error } = userDetails;
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${hours}`);
  };
  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Back
      </Link>
      {loading ? (
        <h1>loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col md={3}>
                <Image src={user.image} fluid rounded />
              </Col>
              <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>{user.name}</strong>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Subject: {user.subjectToTeach}
                  </ListGroup.Item>
                  <ListGroup.Item>{user.description}</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <ListGroup.Item>
                  <Row>
                    <Col>Rating:</Col>
                    <Col>
                      <components.Rating value={user.rating} />
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col># of Reviews:</Col>
                    <Col>{user.numReviews}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Hours</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                      >
                        {[...Array(12).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button className="btn-block" onClick={addToCartHandler}>
                    {hours > 1 ? `Buy ${hours} Hours` : `Buy ${hours} Hour`}
                  </Button>
                </ListGroup.Item>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2 className="text-center my-3">Featured Courses</h2>
          </ListGroup.Item>
          {/* <Row>
            {userDetails.user.courses.map((course) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Card>
                  <Card.Img src={course.image} fluid rounded />
                  <Card.Body>
                    <Card.Text>{course.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row> */}
        </ListGroup>
      )}
    </div>
  );
};

export default UserDisplayScreen;
