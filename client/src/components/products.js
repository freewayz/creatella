import React from 'react';
import Product from './product';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    render() {
        return (
            <section class="products">
                ... products go here ...
            </section>
        )
    }
}


export default Products;