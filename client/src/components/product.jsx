import React from 'react';
import {centToDollar, readableDate} from '../utils';

/**
 * Use a functional react component for the product item
 */
function Product(props) {
    const fontStyle = {
        fontFamily: props.face
    }
    return (
        <div className="product">
            <div style={{ fontFamily: props.face, fontSize: props.size }}>
                Font
            </div>
            <div>Size {props.size} </div>
            <div>Price: {centToDollar(props.price)} </div>
            <div>Date: {readableDate(props.date)} </div>
            <div className="buy-button">
                <button>Buy</button>
            </div>
        </div >
    )
}

export default Product;