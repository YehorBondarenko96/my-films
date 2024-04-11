import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFilms = createAsyncThunk('films/fetchAll', async(_, thunkAPI) => {
    try{
        const result = await axios.get('/films');
        return result.data;
    } catch (e) {
        if (e.response) {
            console.log(e.response.data.message);
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            console.log(e.message);
            return thunkAPI.rejectWithValue(e.message);
        }
    }
});

export const addFilm = createAsyncThunk('films/addFilm', async(dataForAdd, thunkAPI) => {
    try{
        const result = await axios.post('/films', dataForAdd);
        return result.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteFilm = createAsyncThunk('films/deleteFilm', async(filmId, thunkAPI) => {
    try{
        const result = await axios.delete(`/films/${filmId}`);
        return result.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const patchFilm = createAsyncThunk('films/patchFilm', async(dataForPatch, thunkAPI) => {
    const filmId = dataForPatch.id;
    const visualDataForPatch = {name: dataForPatch.name, number: dataForPatch.number};
    try{
        const result = await axios.patch(`/films/${filmId}`, visualDataForPatch);
        return result.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const updateStatusFilm = createAsyncThunk('films/updateStatusFilm', async(dataForPatch, thunkAPI) => {
    const filmId = dataForPatch.id;
    const newStatus = {favorite: dataForPatch.favorite};
    try{
        const result = await axios.patch(`/films/${filmId}/favorite`, newStatus);
        return result.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});