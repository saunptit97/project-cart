import React from "react";

class CartItem extends React.Component {
  render() {
    var item = this.props.item;
    var sum = item.product.price * item.quantity;
    return (
      <tr>
        <th scope="row">
          <img src={item.product.img} alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity - 1)
              }
            >
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity + 1)
              }
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{sum}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDelete(item)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  onDelete = item => {
    this.props.onDelete(item.product);
  };
  onUpdateQuantity = (product, quantity) => {
    this.props.onUpdateQuantity(product, quantity);
  };
}
export default CartItem;
