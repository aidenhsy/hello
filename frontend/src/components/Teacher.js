import React, { Component } from "react";
import { Button, Col, Image, Jumbotron, ListGroup, Row } from "react-bootstrap";
import components from "../components";

const Teacher = ({ teacher }) => {
  return (
    <Jumbotron>
      <Row>
        <Col md={3}>
          <a href={`/teachers/${teacher._id}`}>
            <Image src={teacher.image} fluid rounded />
          </a>
        </Col>
        <Col md={6}>
          <ListGroup variant="flush" backgroundColor="none">
            <ListGroup.Item>
              <a href={`/teachers/${teacher._id}`}>
                <h4 style={{ color: "black" }}>{teacher.name}</h4>
              </a>
            </ListGroup.Item>
            <ListGroup.Item>Subject: {teacher.subject}</ListGroup.Item>
            <ListGroup.Item>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup.Item>
            <Row>
              <Col>
                <components.Rating value={teacher.rating} />
                {teacher.numReviews} reviews
              </Col>
              <Col>
                <h5>$ {teacher.price}</h5>
                per hour
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button className="btn-block" variant="primary">
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

export default Teacher;
