import * as type from "./../constants/ActionType";

export const actAddToCart = (product, quantity) => {
  return {
    type: type.ADD_TO_CART,
    product: product,
    quantity: quantity
  };
};
export const actChangeMessage = message => {
  return {
    type: type.CHANGE_MESSAGE,
    message: message
  };
};
export const actDeleteProduct = product => {
  return {
    type: type.DELETE_PRODUCT_IN_CART,
    product
  };
};
export const actUpdate = (product, quantity) => {
  return {
    type: type.UPDATE_PRODUCT_IN_CART,
    product,
    quantity
  };
};
