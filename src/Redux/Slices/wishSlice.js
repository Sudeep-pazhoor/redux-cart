import { createSlice } from "@reduxjs/toolkit";
import Wishlist from "../../pages/Wishlist";

const wishSlice=createSlice({
    name:"wishlist",
    initialState:{
        Wishlist:[]
    },
    reducers:{
        addToWishlist:(state,action)=>{
            state.Wishlist.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
            state.Wishlist=state.Wishlist.filter(item=>item.id!=action.payload)
        }
    }
})

export default wishSlice.reducer
export const {addToWishlist,removeFromWishlist}=wishSlice.actions