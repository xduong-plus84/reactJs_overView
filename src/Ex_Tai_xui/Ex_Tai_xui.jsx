import React, { Component } from "react";
import bgGame from "../assets/bgGame.png";
import "./game.css";
import Ketqua from "./Ketqua";
import Xucxac from "./Xucxac";

export default class Ex_Tai_xui extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${bgGame})`,
          width: "100vw",
          height: "100vh",
        }}
        className="bg_game"
      >
        <Xucxac />
        <Ketqua />
      </div>
    );
  }
}
