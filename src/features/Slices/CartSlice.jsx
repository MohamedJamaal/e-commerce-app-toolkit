import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
          exist.totalAmount++;
          exist.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            name: productId.name,
            price: productId.price,
            size: productId.size,
            amount: 1,
            totalPrice: productId.price,
            color: productId.color,
            img: productId.img,
            text: productId.text,
          });
          state.totalAmount++;
          state.totalPrice += productId.price;
        }
      } catch (error) {
        return error;
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== productId.id ||
              product.size !== productId.size ||
              product.color !== productId.color
          );
          state.totalAmount--;
          state.totalPrice -= productId.price;
        } else {
          exist.amount--;
          exist.totalPrice -= productId.price;
          exist.totalAmount--;
          exist.totalPrice -= productId.price;
        }
      } catch (error) {
        return error;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
