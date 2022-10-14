import React, { Component } from "react";
import { connect } from "react-redux";
import { LUA_CHON, TAI, XIU } from "./redux/constant/xucXacConstant";

let btnStyle = {
  width: 150,
  height: 150,
  fontSize: 44,
};
class Xucxac extends Component {
  render() {
    let { mangXucXac } = this.props;
    return (
      <div className="container pt-5">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="bg_game"
        >
          <button
            onClick={() => {
              this.props.handleSelectOption(TAI);
            }}
            style={btnStyle}
            className="btn btn-danger"
          >
            Tài
          </button>
          <div>
            {mangXucXac.map((item) => {
              return <img style={{ width: 100 }} src={item.img} />;
            })}
          </div>{" "}
          <button
            onClick={() => {
              this.props.handleSelectOption(XIU);
            }}
            style={btnStyle}
            className="btn btn-secondary"
          >
            Xỉu
          </button>
        </div>
      </div>
    );
  }
}
// class DemoReduxMini extends Component {
//   render() {
//     return;
//   }
// }

let mapStateToProps = (state) => ({
  mangXucXac: state.xucXacReducer.mangXucXac,
});

let mapDispatchToProps = (dispatch) => {
  return {
    handleSelectOption: (value) => {
      dispatch({
        type: LUA_CHON,
        payload: value,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Xucxac);
