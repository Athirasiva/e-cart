import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from './slice/wishListSlice'
import cartSlice from './slice/cartSlice'
 export const ecartStore = configureStore({
    reducer:{
     wishlistReducer: wishlistSlice,
     cartReducer : cartSlice
    }
})