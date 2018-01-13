import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartContainer from "./containers/CartContainer";
import ProductContainer from "./containers/ProductContainer";
class App extends Component {
  render() {
    return (
      <div className="hidden-sn animated deep-purple-skin container-flus">
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductContainer />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
