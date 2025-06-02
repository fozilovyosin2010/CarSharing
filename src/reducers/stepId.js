import { createSlice } from "@reduxjs/toolkit";

const stepId = createSlice({
  name: "stepId",
  initialState: {
    id: 1,
    passed: [0],
  },
  reducers: {
    next: (s, a) => {
      s.id++;
    },
    prev: (s, a) => {
      s.id--;
    },
  },
});

export default stepId.reducer;

export const { next, prev } = stepId.actions;
