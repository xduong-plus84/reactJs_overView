import _ from "lodash";
import React, { Component } from "react";
import FormUser from "./FormUser";
import TableUser from "./TableUser";

export default class Ex_User_Management extends Component {
  state = {
    userList: [],
    userEdited: null,
  };
  handleUserAdd = (user) => {
    let cloneUserList = [...this.state.userList, user];
    this.setState(
      {
        userList: cloneUserList,
      },
      () => {
        // console.log(this.state.userList);
      }
    );
  };
  handleUserDelete = (id) => {
    // let cloneUserList = [...this.state.userList];
    // let index = _.findIndex(this.state.userList, ["id", id]);
    let index = _.findIndex(this.state.userList, (user) => user.id === id);
    console.log("index: ", index);
    let cloneUserList = [...this.state.userList];
    cloneUserList.splice(index, 1);

    this.setState({
      userList: cloneUserList,
    });
  };
  handleUserEdit = (id) => {
    let index = _.findIndex(this.state.userList, (user) => user.id === id);

    let userEdit = this.state.userList[index];

    this.setState({
      userEdited: userEdit,
      
    });
  };



  render() {
    return (
      <div className="container p-5">
        <FormUser
          handleUserAdd={this.handleUserAdd}
          userEdited={this.state.userEdited}
        />
        <TableUser
          handleUserEdit={this.handleUserEdit}
          handleUserDelete={this.handleUserDelete}
          userList={this.state.userList}
        />
      </div>
    );
  }
}
