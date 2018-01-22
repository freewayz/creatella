import React from 'react';

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
            <div> Price: {props.price} </div>
            <div>Date: {props.date} </div>
        </div >
    )
}

export default Product;