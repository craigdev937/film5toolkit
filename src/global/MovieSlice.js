import { createSlice } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";

const initialState = {
    movies: [],
    shows: [],
    selectMovieOrShow: [],
    loading: false,
    error: null
};

const MovieSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        removeMOS: (state) => {
            state.selectMovieOrShow = [];
        },
    },
    extraReducers: {
        [API.fetchAsyncMovies.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.fetchAsyncMovies.pending]: (state) => {
            state.loading = true
        },
        [API.fetchAsyncMovies.fulfilled]: (state, action) => {
            state.loading = false,
            state.movies = action.payload
        },
        [API.fetchAsyncShows.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.fetchAsyncShows.pending]: (state) => {
            state.loading = true
        },
        [API.fetchAsyncShows.fulfilled]: (state, action) => {
            state.loading = false,
            state.shows = action.payload
        },
        [API.fetchMovieOrShow.rejected]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.fetchMovieOrShow.pending]: (state) => {
            state.loading = true
        },
        [API.fetchMovieOrShow.fulfilled]: (state, action) => {
            state.loading = false,
            state.selectMovieOrShow = action.payload
        },
    },
});

export const MovieActions = MovieSlice.actions;
export const MovieReducer = MovieSlice.reducer;


