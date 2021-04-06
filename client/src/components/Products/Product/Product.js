import React from "react";

import "./Product.css";
const Product = ({ product }) => {
  return (
      
        <div className="col-md-4">
          <figure className="card card-product">
            <div className="img-wrap">
              <img src={product.productImage} alt={product.productName} />
            </div>
            <figcaption className="info-wrap">
              <h4 className="title">{product.productName}</h4>
              <p className="desc">Some small description goes here</p>
              <div className="rating-wrap">
                <div className="label-rating">{product.like} Likes</div>
                <div className="label-rating">154 orders </div>
              </div>
            </figcaption>
            <div className="bottom-wrap">
              <a href="" className="btn btn-sm btn-primary float-right">
                Order Now
              </a>
              <div className="price-wrap h5">
                <span className="price-new">TND {product.productPrice}</span>
              </div>
            </div>
          </figure>
        </div>
  );
};

export default Product;

