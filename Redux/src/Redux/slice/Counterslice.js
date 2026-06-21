import { createSlice } from "@reduxjs/toolkit";

export const Counterslice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },

    reducers:{
        incremental:(state)=>{
state.value += 1
        },

        decremental :(state)=>{
            state.value -= 1
        }
    }
})

export const {incremental,decremental} = Counterslice.actions

export default Counterslice.reducer