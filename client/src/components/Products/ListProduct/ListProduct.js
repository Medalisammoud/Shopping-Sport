import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"

import Product from '../Product/Product'
import "./ListProduct.css"


const ListProduct = ({id}) => {
    const products = useSelector(state => state.productReducer.products)
    const [productData, setProductData] = useState([])
    useEffect(() => {
        id ?
        setProductData(products.filter(prd => prd.productCategory._id === id))
        :
        setProductData(products)
    }, [products])
    return (
        <div className="container">
            <div className="row mt-4 mb-5">
                {productData.map(product => <Product key={product._id} product={product} />)}
            </div>
        </div>
    )
}

export default ListProduct
