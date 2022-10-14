import React, { Component } from "react";

export default class GioHang extends Component {
  renderTbody = () => {
    return this.props.gioHang.map((item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            {""}
            <img src={item.image} style={{ width: 80 }} alt="" />
          </td>
          <td>
            <button className="btn btn-primary">-</button>
            <span className="mx-2 text-center"> {item.soLuong}</span>
            <button className="btn btn-success">+</button>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleRemove(item.id);
              }}
              className="btn btn-danger"
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container py-5">
        {/* {GioHang} */}
        <table className="table text-left">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Img</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>{this.renderTbody()}</tbody>

          {this.props.gioHang.length == 0 && (
            <p>Chưa có sản phẩm trong giỏ hàng</p>
          )}
        </table>
      </div>
    );
  }
}
