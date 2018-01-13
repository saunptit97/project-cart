import * as type from "./../constants/ActionType";
let data = JSON.parse(localStorage.getItem("CART"));
// Lay data tu tren localStorage
let initialState = data ? data : [];

const cart = (state = initialState, action) => {
  var { product, quantity } = action;

  switch (action.type) {
    case type.ADD_TO_CART:
      var index = -1;
      index = findProductInCart(state, product);
      console.log(index);
      if (index === -1) {
        state.push({
          product,
          quantity
        });
      } else {
        state[index].quantity += quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case type.DELETE_PRODUCT_IN_CART:
      var index1 = -1;
      index1 = findProductInCart(state, product);
      if (index1 !== -1) {
        state.splice(index1, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case type.UPDATE_PRODUCT_IN_CART:
      var index2 = -1;
      index2 = findProductInCart(state, product);
      if (index2 !== -1) {
        state[index2].quantity = action.quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    default:
      return [...state];
  }
};
var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        return (index = i);
      }
    }
  }
  return index;
};
export default cart;
