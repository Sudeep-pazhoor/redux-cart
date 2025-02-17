import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Slices/productSlice'
import wishlistReducer from './Slices/wishSlice'
import cartReducer from './Slices/cartSlice'

const store=configureStore({
    reducer:{
      productReducer,
      wishlistReducer,
      cartReducer
    }
})
export default store