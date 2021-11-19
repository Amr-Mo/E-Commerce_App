import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { dellItem } from "../redux/actions";

const Cart = () => {
  // getting the data by redux
  const state = useSelector((state) => state.addItems);
  const dispatch = useDispatch();

  // functions
  const handleClose = (item) => {
    dispatch(dellItem(item));
  };

  return (
    <>
      {state.length === 0 && (
        <div className="px-4 my-5 bg-light rounded-3">
          <div className="container py-4">
            <div className="row">
              <h3 className="text-center">Your Cart Is Empty</h3>
            </div>
          </div>
        </div>
      )}

      {state.length !== 0 &&
        state.map((item) => {
          return (
            <div className="px-4 my-5 bg-light rounded-3" key={item.id}>
              <div className="container py-4">
                <button
                  onClick={() => handleClose(item)}
                  className="btn-close float-end"
                  aria-label="Close"
                ></button>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <img src={item.img} alt={item.title} height="250px" />
                  </div>
                  <div className="col-md-4">
                    <h3 className="text-center mt-5">{item.title}</h3>
                    <p className="lead fw-bold mt-4 w-50">${item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      {state.length !== 0 && (
        <div className="container">
          <div className="row justify-content-end">
            <NavLink
              to="/checkout"
              className="btn btn-outline-primary w-25 mb-5 mt-2 py-2"
            >
              Proceed To Checkout
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
