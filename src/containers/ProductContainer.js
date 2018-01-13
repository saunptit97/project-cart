import React from "react";
import Products from "./../components/Products";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Product from "./../components/Product";
import { actAddToCart, actChangeMessage } from "./../actions/index";
class ProductContainer extends React.Component {
  render() {
    let products = this.props.products;
    return <Products>{this.showProduct(products)}</Products>;
  }
  showProduct(products) {
    var elmProduct = null;
    var { onAddToCart, onChangeMessage } = this.props;
    if (products.length > 0) {
      elmProduct = products.map((product, index) => {
        return (
          <Product
            product={product}
            key={index}
            onAddToCart={onAddToCart}
            onChangeMessage={onChangeMessage}
          />
        );
      });
    }
    return elmProduct;
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: product => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage: message => {
      dispatch(actChangeMessage(message));
    }
  };
};
ProductContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    })
  ).isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
