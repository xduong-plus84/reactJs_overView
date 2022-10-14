import React, { Component } from "react";
import { initialUserForm } from "./utils";
import { nanoid } from "nanoid";

export default class FormUser extends Component {
  state = {
    user: initialUserForm,
    isEdit: false,
  };

  // static getDerivedStateFromProps(newprops, state) {
  //   console.log("newprops, state: ", newprops, state);
  //   if (newprops.userEditeds) {
  //     return {
  //       user: newprops.userEdited,
  //     };
  //   }
  // }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    if (nextProps.userEdited) {
      this.setState({
        user: nextProps.userEdited,
      });
    }
  }
  handleChangeForm = (event) => {
    let { name, value } = event.target;
    this.setState({
      user: { ...this.state.user, [name]: value },
    });
  };
  handleAddUser = () => {
    // event.preventDefault();
    // let newUser = this.state.user;
    let newUser = { ...this.state.user };
    newUser.id = nanoid();
    this.setState({
      user: initialUserForm,
    });
    this.props.handleUserAdd(newUser);
  };
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input
              onChange={(event) => {
                this.handleChangeForm(event);
              }}
              value={this.state.user.username}
              type="text"
              name="username"
              className="form-control"
              placeholder="Họ tên"
            />
          </div>
          <div className="form-group">
            <input
              onChange={(event) => {
                this.handleChangeForm(event);
              }}
              value={this.state.user.account}
              type="text"
              name="account"
              className="form-control"
              placeholder="Tài khoản"
            />
          </div>
          <div className="form-group">
            <input
              onChange={(event) => {
                this.handleChangeForm(event);
              }}
              value={this.state.user.password}
              type="text"
              name="password"
              className="form-control"
              placeholder="Mật khẩu"
            />
          </div>
          <button
            type="button"
            onClick={this.handleAddUser}
            className="btn btn-warning m-1"
          >
            Add user
          </button>
        </form>
      </div>
    );
  }
}
