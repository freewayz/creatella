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
            productCache: [],
            isLoading: false,
            loadingText: 'loading.....',
            page: 1,
            limit: 50,
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
            this.prefetchProducts();
        });
    }


    prefetchProducts() {
        this.setState({
            isLoading: true
        });
        getProducts(this.state.page, this.state.limit).then((response) => {
            if (response.data.length == 0) {
                this.setState((prevState, prevProps) => ({
                    productCache: [],
                    loadingText: '~ end of catalogue ~'
                }));
            } else {
                this.setState((prevState, prevProps) => ({
                    productCache: response.data,
                    page: prevState.page + 1,
                    isLoading: false
                }));
            }
        }).catch((err) => {
            //todo show some error or no product found
        });
    }


    handleSortAction(byType) {
        const currentProducts =  this.state.products;
        currentProducts.sort((first, second) => {
            const a = first[byType], b = second[byType];
            if (byType === 'id') {
                // ids are string so sort by string using the local compare
                return a.localeCompare(b)
            }
            // all others are numbers
            return parseInt( a - b);
        });
        this.setState({
            products: currentProducts
        });
    } 

    renderPreFetchProducts() {
        // only update our products state if we have 
        // prefect some in the productsCache
        this.setState((prevState, prevProps) => ({
            products: prevState.products.concat(prevState.productCache),
            productCache: [],
        }));
        this.prefetchProducts();
    }


    handleBottomScroll(event) {
        event.preventDefault();
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        const reachedBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        // the user has reached the bottom of the page
        if (reachedBottom && this.state.productCache.length > 0) {
            this.renderPreFetchProducts();
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
                                // dont put add on the first product row
                                if (index % 20 === 0 && index !==  0 ) {
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
                            state.isLoading ? (<div className="title">{state.loadingText}</div>) : (<div></div>)
                        }
                    </div>
                </div>
            </div>

        )
    }
}


export default Products;