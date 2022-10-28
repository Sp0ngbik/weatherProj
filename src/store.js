import { configureStore } from "@reduxjs/toolkit";
import toolkitSlicer from "./toolkitReducer/toolkitCounter";
export const store = configureStore({
  reducer: {
    counter: toolkitSlicer,
  },
});
