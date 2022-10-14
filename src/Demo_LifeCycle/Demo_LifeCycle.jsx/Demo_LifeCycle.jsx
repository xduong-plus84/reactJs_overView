import React, { Component } from "react";
import Header from "./Header";

export default class Demo_LifeCycle extends Component {
  componentDidMount() {
    // componentDidMount chayj 1 lần duy nhất sau khi reder() chạy lần đầu
    // gọi api ở đây
    console.log("App didmount");
  }
  state = {
    like: 1,
    share: 1,
  };
  render() {
    console.log("App render");
    return (
      <div className="text-center ">
        {this.state.like < 5 && <Header like={this.state.like} />}
        <div className="py-2">
          <p>{this.state.like}</p>{" "}
          <button
            className="btn btn-success"
            onClick={() => {
              this.setState({ like: this.state.like + 1 });
            }}
          >
            Plus like
          </button>
        </div>
        <div className="py-2">
          <p>{this.state.share}</p>{" "}
          <button
            className="btn btn-primary"
            onClick={() => {
              this.setState({ share: this.state.share + 1 });
            }}
          >
            Plus share
          </button>
        </div>
      </div>
    );
  }
  componentDidUpdate() {
    // componentDidUpdate tự động chạy sau khi render chạy 
    // thường dùng để lưu 
    console.log("did update");
  }
}
