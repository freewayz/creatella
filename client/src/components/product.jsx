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
            <div className="face" style={{ fontSize: props.size }}>
                { props.face }
            </div>
            <div className="price">US {centToDollar(props.price)} / Size { props.size }</div>
            <div className="date">{readableDate(props.date)} </div>
            <button className="btn-cart">Add to Cart</button>
        </div >
    )
}
Product.displayName = 'ProductComponent';

export default Product;