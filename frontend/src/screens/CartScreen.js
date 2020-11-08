import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { Button, Col, Image, ListGroup, Row, Form } from "react-bootstrap";

const CartScreen = ({ location, match }) => {
  const dispatch = useDispatch();
  const userId = match.params.id;
  const qty = location.search && Number(location.search.split("=")[1]);
  useEffect(() => {
    dispatch(addToCart(userId, qty));
  });
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <Row>
      <Col md={9}>
        {cartItems.map((user) => (
          <ListGroup.Item>
            <Row>
              <Col md={3}>
                <a href={`/users/${user._id}`}>
                  <Image src={user.image} fluid rounded />
                </a>
              </Col>
              <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h5>
                      <strong>{user.name}</strong>
                    </h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Subject : {user.subjectToTeach}
                  </ListGroup.Item>
                  <ListGroup.Item>Price: $ {user.price} / hour</ListGroup.Item>
                  <ListGroup.Item>
                    <h5>
                      Hours booked:{" "}
                      <Form.Control
                        as="select"
                        value={user.qty}
                        style={{ width: "20%" }}
                        onChange={(e) =>
                          dispatch(addToCart(user._id, e.target.value))
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
                  (accumulator, user) => accumulator + user.qty * user.price,
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
