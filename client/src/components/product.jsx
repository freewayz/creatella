import React from 'react';
import {centToDollar} from '../utils';

/**
 * Use a functional react component for the product item
 */
function Product(props) {
    const fontStyle = {
        fontFamily: props.face
    }
    return (
        <div>
            <div style={{ fontFamily: props.face, fontSize: props.size }}>
                Font
            </div>
            <div> Size {props.size} </div>
            <div> Price: {centToDollar(props.price)} </div>
            <div>Date: {props.date} </div>
        </div >
    )
}

export default Product;