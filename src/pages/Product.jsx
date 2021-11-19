import React from "react";
import { NavLink } from "react-router-dom";
import items from "../Data";

const Product = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {items.map((item) => {
            return (
              <div
                className="card my-4 mx-3 py-4"
                style={{ width: "18rem" }}
                key={item.id}
              >
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="lead">${item.price}</p>
                  <NavLink
                    to={`/products/${item.id}`}
                    className="btn btn-outline-primary"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
