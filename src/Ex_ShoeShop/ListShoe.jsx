import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.data.map((item, index) => {
            return (
              <div key={index} className="col-3">
                <ItemShoe
                  handleViewDetail={this.props.handelXemDetail}
                  detail={item}
                  handleAddToCart={this.props.handleAddToCart}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
