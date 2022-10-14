import React, { Component, PureComponent } from "react";

export default class Header extends PureComponent {

  componentDidMount() {
    this.myInterVal = setInterval(() => {
      console.log("hello");
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextProps: ", nextProps);
    if (nextProps.like == 2) {
      return false;
    }
    return true;
  }
  
  render() {
    console.log("header render");
    return (
      <div className="py-5 text-white bg-warning">
        <p>Header</p>
        <p>Like: {this.props.like}</p>
      </div>
    );
  }

  componentWillUnmount() {
    console.log("Header die");
    clearInterval(this.myInterVal);
  }
}

// pure component ~ hạn chế render không cần thiết ~ shallow compare
// so sánh giá tri chứ không so sánh được địa chỉ
