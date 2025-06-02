import { configureStore } from "@reduxjs/toolkit";
import slideId from "../reducers/slideId";
import stepId from "../reducers/stepId";

export const store = configureStore({
  reducer: {
    slideId: slideId,
    stepId: stepId,
  },
});
