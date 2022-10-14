import React, { Component } from "react";
import { connect } from "react-redux";
import { PLAY_GAME, TAI } from "./redux/constant/xucXacConstant";

class Ketqua extends Component {
  render() {
    return (
      <div className="text-center pt-5 display-4 text-secondary">
        <button
          onClick={() => {
            this.props.handlePlayGame();
          }}
          className="btn btn-success"
        >
          <span className="display-4">Play Game</span>
        </button>
        {this.props.luaChon && (
          <p>
            Bạn chọn:{" "}
            <span
              className={
                this.props.luaChon == TAI ? "text-danger" : "text-dark"
              }
            >
              {this.props.luaChon}
            </span>
          </p>
        )}
        <p>
          Số bàn thắng: <span>{this.props.soBanThang}</span>
        </p>
        <p>
          Số lượt chơi: <span>{this.props.soLuotChoi}</span>{" "}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  luaChon: state.xucXacReducer.luaChon,
  soBanThang: state.xucXacReducer.soBanThang,
  soLuotChoi: state.xucXacReducer.soLuotChoi,
});
const mapDispatchToProps = (dispatch) => {
  return {
    handlePlayGame: () => {
      dispatch({ type: PLAY_GAME });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ketqua);
