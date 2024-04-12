import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'http://localhost:3000/api/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        
        try {
            const res = await axios.post('/users/register', credentials);
            return res.data;
        } catch (e) {
        if (e.response) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
    }
);

export const verifyEmail = createAsyncThunk(
    'auth/verify',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/verify', credentials);
            return res.data;
        } catch (e) {
        if (e.response) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
        const res = await axios.post('/users/login', credentials);
        setAuthHeader(res.data.token);
        return res.data;
        } catch (e) {
        if (e.response) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
    }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (e) {
        if (e.response) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
    }
);

export const delUser = createAsyncThunk(
    'auth/delete',
    async (userId, thunkAPI) => {
        
        try {
            const res = await axios.delete(`/users/${userId}`);
            clearAuthHeader();
            return res.data;
        } catch (e) {
        if (e.response) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
    }
);

export const findUser = createAsyncThunk(
    'auth/findUser',
    async (userId, thunkAPI) => {
        
        try {
            const res = await axios.get(`/users/${userId}`);
            return res.data;
        } catch (e) {
        if (e.response) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
    }
);

export const updatePlayed = createAsyncThunk(
    'auth/updatePlayed',
    async (dataForPut, thunkAPI) => {
        const userId = dataForPut.id;
        const newPlayed = dataForPut.played;
        try {
            const res = await axios.put(`/users/${userId}/played`, newPlayed);
            return res.data;
        } catch (e) {
        if (e.response) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
    }
);

export const updateSelected = createAsyncThunk(
    'auth/updateSelected',
    async (dataForPut, thunkAPI) => {
        const userId = dataForPut.id;
        const newSelected = dataForPut.selected;
        try {
            const res = await axios.put(`/users/${userId}/selected`, newSelected);
            return res.data;
        } catch (e) {
        if (e.response) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        } else {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
    }
);