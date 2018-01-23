import React from 'react';
import ReactDOM from 'react-dom';
import Products from './components/products.jsx';
import './app.scss'

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header>
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