import React, { Component } from "react";
import UserInfor_Prop from "./UserInfor_Prop";

export default class Demo_Prop extends Component {
  state = {
    userName: "Alice",
    age: 2,
  };
  handelChange = (name) => {
    this.setState({
      userName: name,
    });
  };
  render() {
    return (
      <div>
        <p>Demo_Prop</p>
        <UserInfor_Prop
          userName={this.state.userName}
          userAge={this.state.age}
          handelChange={this.handelChange}
        />
      </div>
    );
  }
}
