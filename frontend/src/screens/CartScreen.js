import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({ location, match }) => {
  const dispatch = useDispatch();

  const teacherId = match.params.id;
  const qty = location.search && Number(location.search.split("=")[1]);
  return <div>cart</div>;
};

export default CartScreen;
