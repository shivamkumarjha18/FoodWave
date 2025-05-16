import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cartslice"
export const store=configureStore({
reducer:{
    cart:cartSlice 
}
})