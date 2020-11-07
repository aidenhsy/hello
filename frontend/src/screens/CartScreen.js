import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { Button, Col, Image, ListGroup, Row, Form } from "react-bootstrap";

const CartScreen = ({ location, match }) => {
  const dispatch = useDispatch();
  const teacherId = match.params.id;
  const qty = location.search && Number(location.search.split("=")[1]);
  useEffect(() => {
    dispatch(addToCart(teacherId, qty));
  });
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <Row>
      <Col md={9}>
        {cartItems.map((teacher) => (
          <ListGroup.Item>
            <Row>
              <Col md={3}>
                <a href={`/teachers/${teacher.teacher}`}>
                  <Image src={teacher.image} fluid rounded />
                </a>
              </Col>
              <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h5>
                      <strong>{teacher.name}</strong>
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item>{teacher.subject}</ListGroup.Item>
                  <ListGroup.Item>
                    Price: $ {teacher.price} / hour
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h5>
                      Hours booked:{" "}
                      <Form.Control
                        as="select"
                        value={teacher.qty}
                        style={{ width: "20%" }}
                        onChange={(e) =>
                          dispatch(addToCart(teacher.teacher, e.target.value))
                        }
                      >
                        {[...Array(12).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </h5>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </Col>
      <Col md={3}>
        <ListGroup.Item>
          <Row>
            <Col>Total</Col>
            <Col>
              ${" "}
              {cartItems
                .reduce(
                  (accumulator, teacher) =>
                    accumulator + teacher.qty * teacher.price,
                  0
                )
                .toFixed(2)}
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button className="btn-block">Confirm</Button>
        </ListGroup.Item>
      </Col>
    </Row>
  );
};

export default CartScreen;
