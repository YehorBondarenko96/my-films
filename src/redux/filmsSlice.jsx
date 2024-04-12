import { createSlice} from "@reduxjs/toolkit";
import { fetchFilms, addFilm, deleteFilm, patchFilm } from "./opertions";

const filmsInitialState = {
    items: [],
    scrollLeftLists: 0,
    screenOrientation: 1,
    isLoading: false,
    error: null,
    registEnded: false,
    email: null
    };

const forPending = (state) => {state.isLoading = true};
const forRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const filmsSlice = createSlice({
    name: 'films',
    initialState: filmsInitialState,
    reducers:{
        setScrollLeftLists: (state, action) => {state.scrollLeftLists = action.payload},
        setScreenOrientation: (state, action) => { state.screenOrientation = action.payload },
        setRegistEnded: (state, action) => { state.registEnded = action.payload },
        setEmail: (state, action) => { state.email = action.payload}
    },
    extraReducers: builder => {
        builder
        .addCase(fetchFilms.pending, forPending)
        .addCase(fetchFilms.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const updResult = action.payload.map(f => ({...f, id: f._id, _id: undefined}));
            state.items = updResult;
        })
        .addCase(fetchFilms.rejected, forRejected)
        .addCase(addFilm.pending, forPending)
        .addCase(addFilm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        .addCase(addFilm.rejected, forRejected)
        .addCase(deleteFilm.pending, forPending)
        .addCase(deleteFilm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(film => film.id === action.payload.id);
            state.items.splice(index, 1);
        })
        .addCase(deleteFilm.rejected, forRejected)
        .addCase(patchFilm.pending, forPending)
        .addCase(patchFilm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(film => film.id === action.payload.id);
            state.items.splice(index, 1, action.payload);
        })
        .addCase(patchFilm.rejected, forRejected)
    }
});

export const filmsReducer = filmsSlice.reducer;
export const {setScrollLeftLists, setScreenOrientation, setRegistEnded, setEmail} = filmsSlice.actions;