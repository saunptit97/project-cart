import React from "react";
import * as Message from "./../constants/Message";
class Product extends React.Component {
  showRating = raiting => {
    let result = [];
    for (let i = 0; i < raiting; i++) {
      result.push(<i key={i} className="fa fa-star" />);
    }
    for (let j = 0; j < 5 - raiting; j++) {
      result.push(<i key={j + 10} className="fa fa-star-o" />);
    }
    return result;
  };
  render() {
    let product = this.props.product;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.img} className="img" alt="" />
            <a>
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">{this.showRating(product.rating)}</ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                  onClick={() => this.onAddToCart(product)}
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  onAddToCart = product => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
  };
}

export default Product;
