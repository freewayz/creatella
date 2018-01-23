import React from 'react';
import Product from './product.jsx';
import Filter from './filters.jsx';

import { getProducts } from '../services/product.service';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: false,
            loadingText: 'loading.....',
            page: 1,
            limit: 15,
        };
        this.handleBottomScroll = this.handleBottomScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleBottomScroll);
        this.getInitialProducts();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleBottomScroll);
    }

    getInitialProducts() {
        getProducts(this.state.page, this.state.limit).then((response) => {
            this.setState((prevState, prevProps) => ({
                products: response.data,
                page: prevState.page + 1
            }));
        });
    }
    loadMoreProduct() {
        this.setState({
            isLoading: true
        });
        getProducts(this.state.page, this.state.limit).then((response) => {

            this.setState((prevState, prevProps) => ({
                products: prevState.products.concat(response.data),
                page: prevState.page + 1
            }));
        }).catch((err) => {
            //todo show some error or no product found
        });
    }

    handleBottomScroll(event) {
        event.preventDefault();
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;

        const shouldScrollToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        if (shouldScrollToBottom) {
            this.loadMoreProduct();
        }
    }

    render() {
        const { state } = this;
        return (
            <div className="container">
                <Filter />
                <div className="content">
                    <section className="products">
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
                    <div className="loader">
                        {
                            state.isLoading ? (<div>{state.loadingText}</div>) : (<div></div>)
                        }
                    </div>
                </div>
            </div>

        )
    }
}


export default Products;