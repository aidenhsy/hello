import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTeacherDetails } from "../actions/teacherActions";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Form, Button } from "react-bootstrap";
import components from "../components";

const TeacherScreen = ({ match, history }) => {
  const [hours, setHours] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listTeacherDetails(match.params.id));
  }, [dispatch, match]);
  const teacherDetails = useSelector((state) => state.teacherDetails);
  const { loading, teacher, error } = teacherDetails;
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
        <Row>
          <Col md={3}>
            <Image src={teacher.image} fluid rounded />
          </Col>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>
                  <strong>{teacher.name}</strong>
                </h4>
              </ListGroup.Item>
              <ListGroup.Item>Subject: {teacher.subject}</ListGroup.Item>
              <ListGroup.Item>
                Description: Lorem ipsum, or lipsum as it is sometimes known, is
                dummy text used in laying out print, graphic or web designs.
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup.Item>
              <Row>
                <Col>Rating:</Col>
                <Col>
                  <components.Rating value={teacher.rating} />
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col># of Reviews:</Col>
                <Col>{teacher.numReviews}</Col>
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
      )}
    </div>
  );
};

export default TeacherScreen;
