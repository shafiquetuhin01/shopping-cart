import React from 'react';
import './Product.css';

const Product = ({product,handleAddToCart}) => {
    const {name,img,price,ratings,id,seller,quantity,category} = product;
        return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <div className='product-div'>
                <p><strong>Price:${price}</strong></p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-info'>
                <p>Add To Cart</p>
                <fontAwesome></fontAwesome>
            </button>
        </div>
    );
};

export default Product;