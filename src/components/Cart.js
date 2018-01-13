import React from "react";
import MessageContainer from "./../containers/MessageContainer";
class Cart extends React.Component {
  render() {
    let { children } = this.props;

    return (
      <div>
        <MessageContainer />
        <section className="section">
          <div className="table-responsive">
            <table className="table product-table">
              <thead>
                <tr>
                  <th />
                  <th>Sản Phẩm</th>
                  <th>Giá</th>
                  <th>Số Lượng</th>
                  <th>Tổng Cộng</th>
                  <th />
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}
export default Cart;
