import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "./../components/Cart";
import CartItem from "./../components/CartItem";
import CartResult from "./../components/CartResult";
import { actDeleteProduct, actUpdate } from "./../actions/index";
class CartContainer extends React.Component {
  render() {
    var cart = this.props.cart;
    return (
      <Cart>
        {this.showCart(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
  showCart(cart) {
    let elmCartItem = null;
    var { onDelete, onUpdateQuantity } = this.props;
    if (cart.length > 0) {
      elmCartItem = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            onDelete={onDelete}
            onUpdateQuantity={onUpdateQuantity}
          />
        );
      });
    }
    return elmCartItem;
  }
  showTotalAmount(cart) {
    let result = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        result += cart[i].product.price * cart[i].quantity;
      }
      return <CartResult total={result} />;
    }
    return result;
  }
}

var mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
var mapDispatchToProps = (dispatch, props) => {
  return {
    onDelete: product => {
      dispatch(actDeleteProduct(product));
    },
    onUpdateQuantity: (product, quantity) => {
      dispatch(actUpdate(product, quantity));
    }
  };
};
CartContainer.propType = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
