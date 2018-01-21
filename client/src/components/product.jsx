import React from 'react';

/**
 * Use a functional react component for the product item
 */
function Product(props) {
     return (
         <div> 
             <div> Size {props.size} </div>
             <div> Price: { props.price } </div>
             <div>Date: { props.date } </div>
        </div>
     )
 }

 export default Product;