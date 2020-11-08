import React, { useEffect, useState } from "react";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import axios from "axios";

const TrialScreen = ({ match }) => {
  const [user, setUser] = useState({});
  useEffect(async () => {
    const { data } = await axios.get(`/api/users/${match.params.id}`);
    setUser(data);
  });
  return (
    <Row>
      <Col md={9}>
        <ListGroup.Item>
          <Row>
            <Col md={3}>
              <a href={`/users/${user._id}`}>
                <Image src={user.image} fluid rounded />
              </a>
            </Col>
            <Col md={9}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <a href={`/users/${user._id}`}>
                    <h5>
                      <strong>{user.name}</strong>
                    </h5>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>Subject: {user.subjectToTeach}</ListGroup.Item>
                <ListGroup.Item>Description: {user.description}</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button className="btn-block">
            Confirm 1 hour for $ {user.price}
          </Button>
        </ListGroup.Item>
      </Col>
    </Row>
  );
};

export default TrialScreen;
