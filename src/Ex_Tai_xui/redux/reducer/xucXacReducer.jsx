import { LUA_CHON, PLAY_GAME, TAI, XIU } from "../constant/xucXacConstant";

const initialState = {
  luaChon: "",
  soBanThang: 0,
  soLuotChoi: 0,
  mangXucXac: [
    {
      img: "./xuc_xac/1.png",
      giaTri: 1,
    },
    {
      img: "./xuc_xac/1.png",
      giaTri: 1,
    },
    {
      img: "./xuc_xac/1.png",
      giaTri: 1,
    },
  ],
};

export let xucXacReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PLAY_GAME: {
      state.soLuotChoi++;
      let newManXucXac = [];

      // score ~ tổng 3 điểm của xúc xắc
      let score = 0;

      state.mangXucXac.forEach((item) => {
        let randomNum = Math.floor(Math.random() * (6 - 1)) + 1;
        score += randomNum;
        console.log("randomNum: ", randomNum);
        let newXucXac = {
          img: `./xuc_xac/${randomNum}.png`,
          giaTri: randomNum,
        };
        newManXucXac.push(newXucXac);
      });

      // tính kết quả lượt chơi
      score >= 11 && state.luaChon == TAI && state.soBanThang++;
      score < 11 && state.luaChon == XIU && state.soBanThang++;

      state.mangXucXac = newManXucXac;
      return { ...state };
    }

    case LUA_CHON: {
      state.luaChon = payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
