import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import items from "../Data";
import { addItem, dellItem } from "../redux/actions/index";

const ProductDetail = () => {
  //  Hooks
  const [cartBtn, setCartBtn] = useState("Add To Cart");

  // getting the ID And Filtering The Data
  const params = useParams();
  const id = parseInt(params.slug);
  const proDetail = items.filter((item) => item.id === id);
  const product = proDetail[0];

  // redux
  const dispatch = useDispatch();

  // Functions
  const handleCart = (product) => {
    if (cartBtn === "Add To Cart") {
      setCartBtn("Remove From Cart");
      dispatch(addItem(product));
    } else {
      dispatch(dellItem(product));
      setCartBtn("Add To Cart");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto">
            <img
              src={product.img}
              alt={product.title}
              height="500px"
              className="me-5"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center text-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4 display-4">${product.price}</h2>
            <p>{product.desc}</p>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary my-4"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
