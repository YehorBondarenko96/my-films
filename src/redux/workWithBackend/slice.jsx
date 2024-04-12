import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register, verifyEmail, delUser, findUser, updatePlayed, updateSelected, updateFavorite } from "./operations";

const initialState = {
    user: {
        name: null,
        email: null,
        id: null,
        played: [],
        selected: [],
        favorite: []
    },
    token: null,
    isLoggedIn: false,
    registEnded: false,
    error: null
};

const forPending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const forRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    if(state.error === '401'){
        state.token = null;
        state.isLoggedIn = false;
    }
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        cleanError(state) { state.error = null },
        setToken(state, action) { state.token = action.payload },
        setRegistEnded: (state, action) => { state.registEnded = action.payload },
    },
    extraReducers: builder => {
        builder
        .addCase(register.pending, forPending)
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isLoggedIn = true;
            state.registEnded = true;
        })
        .addCase(register.rejected, forRejected)
        .addCase(verifyEmail.pending, forPending)
        .addCase(verifyEmail.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(verifyEmail.rejected, forRejected)
        .addCase(delUser.pending, forPending)
        .addCase(delUser.fulfilled, (state, action) => {
            state.user = {
                name: null,
                email: null,
                id: null,
                played: [],
                selected: [],
                favorite: []
            };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(delUser.rejected, forRejected)
        .addCase(logOut.pending, forPending)
        .addCase(logOut.fulfilled, (state) => {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(logOut.rejected, forRejected)
        .addCase(logIn.pending, forPending)
        .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
            .addCase(logIn.rejected, forRejected)
        .addCase(findUser.pending, forPending)
        .addCase(findUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isLoggedIn = true;
        })
        .addCase(findUser.rejected, forRejected)
        .addCase(updatePlayed.pending, forPending)
        .addCase(updatePlayed.fulfilled, (state, action) => {
            state.user.played = action.payload.user.played;
            state.isLoggedIn = true;
        })
        .addCase(updatePlayed.rejected, forRejected)
        .addCase(updateSelected.pending, forPending)
        .addCase(updateSelected.fulfilled, (state, action) => {
            state.user.selected = action.payload.user.selected;
            state.isLoggedIn = true;
        })
        .addCase(updateSelected.rejected, forRejected)
        .addCase(updateFavorite.pending, forPending)
        .addCase(updateFavorite.fulfilled, (state, action) => {
            state.user.favorite = action.payload.user.favorite;
            state.isLoggedIn = true;
        })
        .addCase(updateFavorite.rejected, forRejected)
    }
});

export const authReducer = authSlice.reducer;
export const {cleanError, setToken, setRegistEnded} = authSlice.actions;