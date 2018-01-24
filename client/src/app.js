import React from 'react';
import ReactDOM from 'react-dom';
import Products from './components/products.jsx';
import HeaderNav from './components/header-nav.jsx';
import './app.scss'

class App extends React.Component {
    render() {
        return (
            <div className="app">
               <HeaderNav/>
               <Products/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, 
    document.getElementById("app")
)