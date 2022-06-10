import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../config/MovieApiKey";

const URL = "https://www.omdbapi.com";
class FetchClass {
    getFilms = createAsyncThunk("films/getFilms", 
    async (term) => {
        const res = await fetch(
            `${URL}?apiKey=${APIKey}&s=${term}&type=movie`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });

    fetchShows = 
    createAsyncThunk("shows/fetchShows", 
    async (term) => {
        const res = await fetch(
            `${URL}?apiKey=${APIKey}&s=${term}&type=series`
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





