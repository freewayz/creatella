import React from 'react';
import ReactDOM from 'react-dom';
import Products from './components/products.jsx';


class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Products Grid</h1>

                    <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>
                    <p>But first, a word from our sponsors:</p>
                </header>

               <Products/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, 
    document.getElementById("app")
)