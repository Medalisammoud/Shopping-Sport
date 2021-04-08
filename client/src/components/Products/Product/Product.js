import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


import "./Product.css";
import like from "../../../assets/like.png";
import like1 from "../../../assets/like1.png";

import { updateProduct } from "../../../js/Action/actionProduct";
import { addPanel } from "../../../js/Action/actionOrder";

const Product = ({ product }) => {
  const [likeShow, setLikeShow] = useState(false);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    setLikeShow(false);
  }, [isAuth]);
  const handleLike = () => {
    !likeShow
      ? dispatch(updateProduct(product._id, { like: product.like + 1 }))
      : dispatch(updateProduct(product._id, { like: product.like - 1 }));
    setLikeShow(!likeShow);
  };
  return (
    <div className="col-md-4">
      <figure className="card card-product">
        <div className="img-wrap">
          <Link to={`/product/${product._id}`}>
            <img src={product.productImage} alt={product.productName} />
          </Link>
        </div>
        <figcaption className="info-wrap">
          <h4 className="title">{product.productName}</h4>
          <p className="desc">
           
          </p>
          <div className="rating-wrap">
            <div className="label-rating">{product.like} Likes</div>
            <div className="label-rating">
              {likeShow ? (
                <img src={like1} alt="like" onClick={handleLike} />
              ) : (
                <img src={like} alt="like" onClick={handleLike} />
              )}{" "}
            </div>
          </div>
        </figcaption>

        <div className="bottom-wrap">
          <div className="price-wrap h5">
            <span className="price-new">TND {product.productPrice}</span>
          </div>
          <button
            className="btn btn-round btn-danger"
            type="button"
            onClick={() => dispatch(addPanel(product))}
          >
            <i className="fa fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </figure>
    </div>
  );
};

export default Product;
