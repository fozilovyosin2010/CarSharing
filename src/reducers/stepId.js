import { createSlice } from "@reduxjs/toolkit";

const stepId = createSlice({
  name: "stepId",
  initialState: {
    id: 1,
    carId: 0,
  },
  reducers: {
    next: (s, a) => {
      s.id++;
    },
    prev: (s, a) => {
      s.id--;
      console.log(s.id);
    },
    // for Car id

    selCarId: (s, a) => {
      s.carId == a.payload ? (s.carId = 0) : (s.carId = a.payload);
    },
    // for swiper
    setSelCarId: (s, a) => {
      s.carId = a.payload;
    },
  },
});

export default stepId.reducer;

export const { next, prev, selCarId, setSelCarId } = stepId.actions;
