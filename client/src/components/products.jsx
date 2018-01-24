import React from 'react';
import Product from './product.jsx';
import Sorter from './sorter.jsx';
import Ads from './ads.jsx';
import { getProducts } from '../services/product.service';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: false,
            loadingText: 'loading.....',
            page: 1,
            limit: 20,
            sortType: null,
        };
        this.handleBottomScroll = this.handleBottomScroll.bind(this);
        this.handleSortAction = this.handleSortAction.bind(this);
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

    handleSortAction(byType) {
        const currentProducts =  this.state.products;
        currentProducts.sort((first, second) => {
            return parseInt(first[byType] - second[byType]);
        });
        this.setState({
            products: currentProducts
        });
    } 

    loadMoreProduct() {
        this.setState({
            isLoading: true
        });
        getProducts(this.state.page, this.state.limit).then((response) => {
            if (response.data.length == 0) {
                this.setState({
                    loadingText: '~ end of catalogue ~'
                });
            } else {
                this.setState((prevState, prevProps) => ({
                    products: prevState.products.concat(response.data),
                    page: prevState.page + 1
                }));
            }
        }).catch((err) => {
            //todo show some error or no product found
        });
    }

    handleBottomScroll(event) {
        event.preventDefault();
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;

        const reachedBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        if (reachedBottom) {
            this.loadMoreProduct();
        }
    }

    render() {
        const { state } = this;
        return (
            <div className="container">
                <Sorter
                 sortAction={this.handleSortAction}
                />
                <div className="content">
                    <section className="products">
                        {
                            state.products.map((item, index) => {
                                // let show our add after every 20 products
                                if (index % 20 === 0) {
                                    return (
                                        <Ads/>
                                    )
                                } else {
                                    return (
                                        <Product
                                            face={item.face}
                                            size={item.size}
                                            price={item.price}
                                            date={item.date}
                                        />
                                    )
                                }
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