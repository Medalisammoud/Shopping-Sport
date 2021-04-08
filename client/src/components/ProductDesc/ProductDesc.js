import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPanel } from "../../js/Action/actionOrder";

import "./ProductDesc.css";

const ProductDesc = ({ match, history }) => {
    const dispatch = useDispatch()
  const products = useSelector((state) => state.productReducer.products);
  const [product, setProduct] = useState(
    products.find((prt) => prt._id === match.params.id)
  );
  return (
    <div className="container bootdey" >
      <div className="col-md-12">
        <section className="panel" style={{margin:"50px 0"}}>
          <div className="panel-body" style={{display:"flex"}} >
            <div className="col-md-6">
              <div className="pro-img-details">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="pro-d-title">{product.productName}</h4>
              <p>{product.productDesc}</p>
              <div className="product_meta">
                <span className="posted_in">
                  {" "}
                  <strong>Categories:</strong>{" "}
                  {product.productCategory.categoryName}
                </span>
              </div>
              <div className="m-bot15">
                {" "}
                <strong>Price : </strong>{" "}
                <span className="pro-price">{product.productPrice} TND</span>
              </div>
              <div className="form-group">
                <p>Quantity : {product.productQty}</p>
              </div>
              <p>
                <button className="btn btn-round btn-danger" type="button" onClick={()=>dispatch(addPanel(product))}>
                  <i className="fa fa-shopping-cart"></i> Add to Cart
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>

    // <div>
    //     <div classNameName="card1">

    //     <div classNameName="thumbnail"><iframe classNameName="embed-responsive-item" title={product.productName} src={product.productImage} ></iframe></div>
    //     <div classNameName="right">
    //         <h1>{product.productName}</h1>

    //         <div classNameName="separator"></div>
    //         <p>{product.productDesc}</p>
    //     </div>
    //         <div classNameName="fab"><button classNameName="btn btn-block btn-light" onClick={()=> history.goBack()}>
    //           Continue Shopping
    //         </button></div>

    //     </div>
    // </div>
  );
};

export default ProductDesc;
