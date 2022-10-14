import { GIAM_SO_LUONG, TANG_SO_LUONG } from "../constants/numberConstants";

export let tangSoLuongAction = () => {
  return {
    type: TANG_SO_LUONG,
  };
};

export let giamSoLuongAction = (value) => {
  return {
    type: GIAM_SO_LUONG,
    payload: value,
  };
};
