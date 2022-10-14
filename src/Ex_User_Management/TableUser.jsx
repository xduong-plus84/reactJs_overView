import React, { Component } from "react";

export default class TableUser extends Component {
  renderTbody = () => {
    return this.props.userList.map((item, index) => {
      return (
        <tr key={index.toString() + item.id}>
          <td>{item.id}</td>
          <td>{item.account}</td>
          <td>{item.password}</td>
          <td>{item.username}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleUserDelete(item.id);
              }}
              className="btn btn-danger m-1"
            >
              Xoá
            </button>
            <button
              onClick={() => {
                this.props.handleUserEdit(item.id);
              }}
              className="btn btn-warning m-1"
            >
              Sửa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tài khoản</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTbody()}</tbody>
        </table>
      </div>
    );
  }
}
