import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/Slices/SliderSlices";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});
