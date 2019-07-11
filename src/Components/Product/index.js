import React, { Component } from 'react';
import './style.css';
class Product extends Component {
    render() {
        let product = this.props.Data;
        return (
               <li id='product'>
                    <div id='img-container'>
                        <img src={product.image} />
                    </div>
                    <div id='context'>
                        <p id="brand">Seventy Five</p>
                        <p id='title'>{product.title}</p>
                        <p id='price'>{Math.floor(product.price)} AED</p>
                    </div>
                </li>
        );
    }
}

export default Product;