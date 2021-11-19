import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () => {
  const state = useSelector((state) => state.addItems);
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2 ">
        <span>
          <FaShoppingCart className="me-1 mb-1" />
        </span>
        Cart ({state.length})
      </NavLink>
    </>
  );
};

export default CartBtn;
