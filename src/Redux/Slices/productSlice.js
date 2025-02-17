import { createSlice,createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchProductThunk=createAsyncThunk('productSlice/fetchProductThunk',async()=>{
    const result=await axios.get('https://dummyjson.com/products')
    console.log(result)
    sessionStorage.setItem("products",JSON.stringify(result.data.products))
    return result.data.products

})

const productSlice=createSlice(
    {
        name:"products",
        initialState:{
            products:[],
            pending:false,
            productstemp:[],
            error:"",
            productsPerPage:10,
            currentPage:1
        },
        reducers:{
            searchProducts:(state,action)=>{

                state.products=state.productstemp.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
            },
            leftshift:(state)=>{
                state.currentPage--//shifting of Page (B)!
            },
            rightshift:(state)=>{
                state.currentPage++//shifting of Page (F)!
            }

        },
        extraReducers:(builder)=>{
           builder.addCase(fetchProductThunk.pending,(state,action)=>{
            state.pending=true
            state.products=[]
            state.error=""
           }),
           builder.addCase(fetchProductThunk.fulfilled,(state,action)=>{
            state.pending=false
            state.products=action.payload
            state.productstemp=action.payload
            state.error=""
           }),
           builder.addCase(fetchProductThunk.rejected,(state,action)=>{
            state.pending=false
            state.products=[]
            state.error="Api call failed"
           })
        }
    }
)

export default productSlice.reducer
export const {searchProducts,leftshift,rightshift}=productSlice.actions