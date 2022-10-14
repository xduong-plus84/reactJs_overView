import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { XEM_CHI_TIET } from "./redux/constant/shoeConstant";

class ItemShoe extends Component {
  render() {
    let { name, image } = this.props.detail;
    return (
      <Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              onClick={() => {
                this.props.handleAddToCart(this.props.detail);
              }}
              className="btn btn-success"
            >
              Add to card
            </button>
            <button
              onClick={() => {
                this.props.handleViewDetail(this.props.detail.id);
              }}
              className="btn btn-warning"
            >
              Xe chi tiết
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    detailShoe: state.shoeReducer.shoeArr,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleViewDetail: (value) => {
      dispatch({
        type: XEM_CHI_TIET,
        payload: value,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemShoe);
