import React, { Component } from "react";

export default class UserInfor_Prop extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <p>UserInfor_Prop</p>

        <h2>UserName: {this.props.userName}</h2>
        <h2>Age: {this.props.userAge}</h2>
        <button
          className="btn btn-dark"
          onClick={() => {
            this.props.handelChange("bobs");
          }}
        >
          Change name
        </button>
      </div>
    );
  }
}
