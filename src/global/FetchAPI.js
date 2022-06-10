import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../config/MovieApiKey";

const URL = "https://www.omdbapi.com";
class FetchClass {
    fetchAsyncMovies = 
    createAsyncThunk("movies/fetchAsyncMovies", 
    async (term) => {
        const res = await fetch(
            `${URL}?apiKey=${APIKey}&s=${term}&type=movie`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });

    fetchAsyncShows = 
    createAsyncThunk("shows/fetchAsyncShows", 
    async (term) => {
        const res = await fetch(
            `${URL}?apiKey=${APIKey}&s=${term}&type=series`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });

    fetchMovieOrShow = 
    createAsyncThunk("movies/fetchMovieOrShow", 
    async (id) => {
        const res = await fetch(
            `${URL}?apiKey=${APIKey}&i=${id}&Plot=full`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });
};

export const API = new FetchClass();





