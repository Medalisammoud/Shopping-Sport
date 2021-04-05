import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"

import Product from '../Product/Product'
import "./ListProduct.css"


const ListProduct = () => {
    const products = useSelector(state => state.productReducer.products)
    const [productData, setProductData] = useState([])

    useEffect(() => {
        setProductData(products)
    }, [products])
    return (
        <div className="gallery">
            
            
                {productData.map(product => <Product key={product._id} product={product} />)}
            
            
        </div>
    )
}

export default ListProduct
