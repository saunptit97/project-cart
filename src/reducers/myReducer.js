import { combineReducers } from "redux";
import ListProduct from "./ListProduct";
import cart from "./Cart";
import Message from "./Message";
const myReducer = combineReducers({
  products: ListProduct,
  cart: cart,
  message: Message
});

export default myReducer;
