import { createSlice } from "@reduxjs/toolkit";

//jt76u6

export const Theamslice = createSlice({
 name:'theam',
 initialState:{
    value:"Light"
 },

 reducers:{
    changetolightmode:(state)=>{
        state.value = 'light'
    },
    changetodarkmode:(state) =>{
        state.value = 'dark'
    }
 }
})

export const {changetodarkmode,changetolightmode} = Theamslice.actions

export default Theamslice.reducer
