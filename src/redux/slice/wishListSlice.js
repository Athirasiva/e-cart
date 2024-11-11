import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name:"wishlistSlice",
    initialState:[],
    reducers:{
        addWishList : (state,action)=>{
            state.push(action.payload)
        },
        removeFromWishList : (state,action)=>{
           return state.filter(item=>item.id!= action.payload)
        },
        emptyWishlist:(state)=>{
           return state = []
        }
    }
})

export const { addWishList, removeFromWishList, emptyWishlist} =  wishListSlice.actions

export default wishListSlice.reducer