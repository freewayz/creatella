import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Products Grid</h1>

                    <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>

                    <p>But first, a word from our sponsors:</p> <script>document.write('<img class="ad" src="/ads/?r=' + Math.floor(Math.random()*1000) + '" />');</script>
                </header>

                <section class="products">
                    ... products go here ...
                </section>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, 
    document.getElementById("app")
)