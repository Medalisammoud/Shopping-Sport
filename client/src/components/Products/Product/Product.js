import React from "react";

import "./Product.css";
const Product = ({product}) => {
   
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-4 col-sm-12 col-xs-12">
          <div className="card pl-4 pr-3 py-2">
            <div className="div1 row py-4 px-2">
              <div className="col-6 d-flex justify-content-center">
                {" "}
                <img
                  src={product.productImage}
                  height=""
                  width="150%"
                  alt={product.productName}
                />{" "}
              </div>
              <div className="col-3 d-flex flex-column pl-4">
                {" "}
                <i
                  className="fa fa-heart fa-lg mt-4"
                  aria-hidden="true"
                ></i>{" "}
              </div>
            </div>
            <div className="py-2">
              <h5>{product.productName}</h5>
              <p> {product.like} </p>
              <div className="d-flex">
                <h5 className="align-self-center">{product.productPrice} TNT</h5>{" "}
                <button className="buy d-flex ml-5 font-weight-bold pl-4 pr-5 py-2 border-0">
                  {" "}
                  Buy{" "}
                </button>{" "}
                <span className="cart text-white d-flex p-2">
                  <i
                    className="fa fa-shopping-cart fa-lg align-self-center"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
