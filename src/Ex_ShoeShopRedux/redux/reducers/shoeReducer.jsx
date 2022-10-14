import { dataShoe } from "../../data_shoe";
import { XEM_CHI_TIET } from "../constant/shoeConstant";

const initialState = {
  shoeArr: dataShoe,
  detailShoe: dataShoe[0],
  gioHang: [],
};

//rxreducer
export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case XEM_CHI_TIET: {
      state.detailShoe = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
