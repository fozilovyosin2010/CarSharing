import { createSlice } from "@reduxjs/toolkit";

export const slideId = createSlice({
  name: "slideId",
  initialState: {
    id: 0,
  },
  reducers: {
    plus: (state, action) => {
      if (state.id == 2) {
        state.id = 0;
      } else {
        state.id++;
      }
    },
    minus: (state, action) => {
      if (state.id == 0) {
        state.id = 2;
      } else {
        state.id--;
      }
    },
    mirror: (state, action) => {
      state.id = action.payload;
    },
  },
});

export default slideId.reducer;
export const { plus, minus, mirror } = slideId.actions;
