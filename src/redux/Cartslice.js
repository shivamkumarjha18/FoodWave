import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        Additem:(state,action)=>{
            let existitem= state.find((item)=>item.id===action.payload.id)
            if(existitem){
             return   state.map((item)=>(item.id===action.payload.id?{...item,qty:item.qty+1}:item))
            }else{
                state.push(action.payload)
            }
         
        },
        Removeitem:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },
        Incrementqty:(state,action)=>{
            return   state.map((item)=>(item.id===action.payload.id?{...item,qty:item.qty+1}:item))
        },
        Decrementqty: (state, action) => {
            return state.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: Math.max(1, item.qty - 1) }
                : item
            );
          },
          
    }
})


export const{Additem,Removeitem,Incrementqty,Decrementqty}=cartSlice.actions
export default cartSlice.reducer