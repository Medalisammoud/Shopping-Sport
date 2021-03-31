import React from 'react'

import image from '../../../assets/signup.jpg'
import image1 from '../../../assets/signin.jpg'
import './Product.css'
const Product = () => {
    return (
    <div className="container">
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <div className="product-grid">
                <div className="product-image">
                    <a href="#" className="image">
                        <img className="pic-1" src={image} />
                        <img className="pic-2" src={image1} />
                    </a>
                     <span className="product-sale-label">sale!</span>
                    <ul className="social">
                        <li><a href="#" data-tip="Add to wishlist"><i className="fa fa-heart"></i></a></li>
                    </ul>
                    <div className="product-rating">
                        <ul className="rating">
                            <li className="fas fa-star"></li>
                            <li className="fas fa-star"></li>
                            <li className="fas fa-star"></li>
                            <li className="far fa-star"></li>
                            <li className="far fa-star"></li>
                        </ul>
                        <a className="add-to-cart" href="#"> ADD TO CART </a>
                    </div>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="#">Men's Shirt</a></h3>
                    <div className="price"><span>$28.00</span>$20.00</div>
                </div>
            </div>
        </div>

        
    </div>
</div>
    )
}

export default Product
