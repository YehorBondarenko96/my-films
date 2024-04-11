import { createSlice } from "@reduxjs/toolkit";



const filterSlice = createSlice({
    name: 'filter',
    initialState: "",
    reducers:{
        setFilter: {
            reducer (state, action){
                    return action.payload;
                },
            prepare (text) {
                return{
                    payload: text
                }
            }
        }
    }
});

export const filterReducer = filterSlice.reducer;
export const {setFilter} = filterSlice.actions;