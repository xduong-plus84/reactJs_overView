import React, { Component } from "react";
import CardItem from "./CardItem";

export default class RenderWithMap extends Component {
  state = {
    phoneArr: [
      {
        name: "Persian",
        img: "http://loremflickr.com/640/480/technics",
        price: "880.00",
        id: "1",
      },
      {
        name: "Donskoy",
        img: "http://loremflickr.com/640/480/technics",
        price: "580.00",
        id: "2",
      },
      {
        name: "Ocicat",
        img: "http://loremflickr.com/640/480/technics",
        price: "54.00",
        id: "3",
      },
      {
        name: "American Shorthair",
        img: "http://loremflickr.com/640/480/technics",
        price: "202.00",
        id: "4",
      },
      {
        name: "Norwegian Forest Cat",
        img: "http://loremflickr.com/640/480/technics",
        price: "487.00",
        id: "5",
      },
      {
        name: "Oriental",
        img: "http://loremflickr.com/640/480/technics",
        price: "532.00",
        id: "6",
      },
      {
        name: "Siberian",
        img: "http://loremflickr.com/640/480/technics",
        price: "876.00",
        id: "7",
      },
      {
        name: "Bengal",
        img: "http://loremflickr.com/640/480/technics",
        price: "715.00",
        id: "8",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <p>RenderWithMap copy </p>
        <div className="row row-cols-6">
          {this.state.phoneArr.map((item, index) => {
            return <CardItem data={item} key={index.toString() + item.id} />;
          })}
        </div>
      </div>
    );
  }
}
