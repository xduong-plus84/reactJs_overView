import React, { Component } from "react";

export default class DetailShoe extends Component {
  render() {
    let { image, name, price, description } = this.props.detailShoe;
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            <img src={image} className="w-100" alt="" />
          </div>
          <div className="col-8 primary">
            <p>Ten: {name}</p>
            <p>Gia: {price}</p>
            <p>Mo ta: {description}</p>
          </div>
        </div>
      </div>
    );
  }
}
