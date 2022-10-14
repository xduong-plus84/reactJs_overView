import React, { Component } from "react";
import { dataShoe } from "./data_shoe";
import DetailShoe from "./DetailShoe";
import GioHang from "./GioHang";
import ListShoe from "./ListShoe";

export default class Ex_ShoeShop extends Component {
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
  handleAddToCart = (shoe) => {
    // th1: sản phẩm  chưa có trong giỏ hang
    // th2: sản phẩm đã có trong giỏ hàng
    let cloneGioHang = [...this.state.gioHang];

    let index = this.state.gioHang.findIndex((item) => item.id === shoe.id);

    if (index == -1) {
      let spGioHang = { ...shoe, soLuong: 1 };
      cloneGioHang.push(spGioHang);
    } else {
      cloneGioHang[index].soLuong++;
    }

    this.setState(
      {
        gioHang: cloneGioHang,
      },
      console.log("add to cart")
    );
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
        <GioHang
          gioHang={this.state.gioHang}
          handleRemove={this.handleRemove}
        />
        <ListShoe
          data={this.state.shoeArr}
          handelXemDetail={this.handelXemChiTiet}
          handleAddToCart={this.handleAddToCart}
        />
        <DetailShoe detailShoe={this.state.detailShoe} />
      </div>
    );
  }
}
