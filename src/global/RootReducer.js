import { configureStore } from "@reduxjs/toolkit";
import { MovieReducer } from "./MovieSlice";

export const RootReducer = configureStore({
    reducer: {
        movies: MovieReducer,
    },
});


