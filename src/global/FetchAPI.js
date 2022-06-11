import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../config/MovieApiKey";

const URL = "https://www.omdbapi.com";
class FetchClass {
    getFilms = createAsyncThunk("films/getFilms", 
    async (query) => {
        const res = await fetch(
            `${URL}?apiKey=${APIKey}&s=${query}&type=movie`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });

    fetchShows = 
    createAsyncThunk("shows/fetchShows", 
    async (query) => {
        const res = await fetch(
            `${URL}?apiKey=${APIKey}&s=${query}&type=series`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });

    getFilmOrShow = 
    createAsyncThunk("films/getFilmOrShow", 
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





