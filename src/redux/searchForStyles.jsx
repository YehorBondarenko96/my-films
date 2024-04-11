import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const searchForBackground = createAsyncThunk('images/fetchAll', async(_, thunkAPI) =>{
    try{
        const messyResult = await axios.get(`https://pixabay.com/api/?q=space&page=1&key=40289268-709deefe1360f0520e7e421a0&image_type=photo&orientation=horizontal`);
        return messyResult.data.hits
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});