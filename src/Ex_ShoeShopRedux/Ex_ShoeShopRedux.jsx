import React, { Component } from "react";
import { dataShoe } from "./data_shoe";
import DetailShoe from "./DetailShoe";
import GioHang from "./GioHang";
import ListShoe from "./ListShoe";

export default class Ex_ShoeShopRedux extends Component {
  state = {
    shoeArr: dataShoe,
    detailShoe: dataShoe[0],
    gioHang: [],
  };
  handelXemChiTiet = (id) => {
    // có 3 cách
    let index = this.state.shoeArr.findIndex((item) => {
      return item.id == id;
    });
    index !== -1 &&
      this.setState({
        detailShoe: dataShoe[index],
      });
  };

  handleRemove = (idShoe) => {
    console.log("idShoe: ", idShoe);
    let index = this.state.gioHang.findIndex((item) => {
      return item.id == idShoe;
    });
  };
  render() {
    // console.log(this.state.gioHang.length);
    return (
      <div>
        <GioHang />
        <ListShoe />
        <DetailShoe />
      </div>
    );
  }
}
