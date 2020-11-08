import React from "react";
import { Button, Col, Image, Jumbotron, ListGroup, Row } from "react-bootstrap";
import components from ".";
import { useHistory } from "react-router-dom";

const User = ({ user }) => {
  const history = useHistory();
  return (
    <Jumbotron>
      <Row>
        <Col md={3}>
          <a href={`/users/${user._id}`}>
            <Image src={user.image} fluid rounded />
          </a>
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <a href={`/users/${user._id}`}>
                <h4 style={{ color: "black" }}>{user.name}</h4>
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              Subject: <a href="/">{user.subjectToTeach}</a>
            </ListGroup.Item>
            <ListGroup.Item>{user.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup.Item>
            <Row>
              <Col>
                <components.Rating value={user.rating} />
                {user.numReviews} reviews
              </Col>
              <Col>
                <h5>$ {user.price}</h5>
                per hour
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              className="btn-block"
              onClick={() => {
                history.push(`/trial/${user._id}`);
              }}
            >
              Book trial lesson
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button className="btn-block" variant="secondary">
              Message
            </Button>
          </ListGroup.Item>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default User;
