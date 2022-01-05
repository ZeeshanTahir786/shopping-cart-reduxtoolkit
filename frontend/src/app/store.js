import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/productsApi";
import productReducer from "../features/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
