import React from 'react';
import Product from './product.jsx';
import { getProducts } from '../services/product.service';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        getProducts().then((response) => {
            this.setState({
                products: response.data,
            })
        })
    }

    render() {
        const {state} = this;
        return (
            <section class="products">
                ... products go here ...
                {
                    state.products.map((item, index) => {
                        return (
                            <Product
                                face={item.face}
                                size={item.size}
                                price={item.price}
                                date={item.date}
                            />
                        )
                    })
                }
            </section>
        )
    }
}


export default Products;