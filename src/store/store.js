import { configureStore } from "@reduxjs/toolkit";
import slideId from "../reducers/slideId";

export const store = configureStore({
  reducer: {
    slideId: slideId,
  },
});
