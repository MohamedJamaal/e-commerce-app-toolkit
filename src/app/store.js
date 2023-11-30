import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/Slices/SliderSlices";
import productsReducer from "../features/Slices/ProductsSilce";
import cartReducer from "../features/Slices/CartSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
