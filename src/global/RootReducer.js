import { configureStore } from "@reduxjs/toolkit";
import { FilmReducer } from "./FilmSlice";

export const RootReducer = configureStore({
    reducer: {
        films: FilmReducer,
    },
});


