import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,img,price,ratings,id,seller,quantity,category} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <div className='product-div'>
                <p><strong>Price:${price}</strong></p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button className='btn-info'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;