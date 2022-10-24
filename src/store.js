import { configureStore } from "@reduxjs/toolkit";
import toolkitCounter from "./toolkitReducer/toolkitCounter";

export const store = configureStore({
  reducer: {
    counter: toolkitCounter,
  },
});
