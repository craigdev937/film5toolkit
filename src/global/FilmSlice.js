import { createSlice } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";

const initialState = {
    films: [],
    shows: [],
    filmOrShow: [],
    loading: false,
    error: null
};

const FilmSlice = createSlice({
    name: "films",
    initialState: initialState,
    reducers: {
        removeFOS: (state) => {
            state.filmOrShow = [];
        },
    },
    extraReducers: {
        [API.getFilms.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.getFilms.pending]: (state) => {
            state.loading = true
        },
        [API.getFilms.fulfilled]: (state, action) => {
            state.loading = false,
            state.films = action.payload
        },
        [API.fetchShows.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.fetchShows.pending]: (state) => {
            state.loading = true
        },
        [API.fetchShows.fulfilled]: (state, action) => {
            state.loading = false,
            state.shows = action.payload
        },
        [API.getFilmOrShow.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.getFilmOrShow.pending]: (state) => {
            state.loading = true
        },
        [API.getFilmOrShow.fulfilled]: (state, action) => {
            state.loading = false,
            state.filmOrShow = action.payload
        },
    },
});

export const FilmActions = FilmSlice.actions;
export const FilmReducer = FilmSlice.reducer;


