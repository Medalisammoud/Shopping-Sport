import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Product from "./Product";

const ListProduct = () => {
    const Products = useSelector((state) => state.productReducer.products);
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      setProducts(Products);
    }, [Products]);

    return (
        <div
      className="tab-pane fade"
      id="Products"
      role="tabpanel"
      aria-labelledby="Products-tab"
    >
      <div className="row">
        <div className="col-md-12">
          <div className="card" style={{marginRight:"-100px"}}>
            <div className="table-responsive">
              <table className="table no-wrap user-table mb-0" >
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium pl-4"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                      
                    >
                      <div style={{width:"100px"}}>Product Name</div>
                    </th>
                    <th className="border-0 text-uppercase font-medium">Description</th>
                    <th className="border-0 text-uppercase font-medium">Price</th>
                    <th className="border-0 text-uppercase font-medium">Quantity</th>
                    <th className="border-0 text-uppercase font-medium">Category</th>
                    <th className="border-0 text-uppercase font-medium">Like</th>
                    <th className="border-0 text-uppercase font-medium"></th>
                    
                  </tr>
                </thead>
                {products.map((product, i) => (
                  <Product key={product._id} product={product} i={i} />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ListProduct
