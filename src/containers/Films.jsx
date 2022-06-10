import React from "react";
import { useDispatch } from "react-redux";
import { MovieListing } from "./MovieListing";
import { API } from "../global/FetchAPI";

export const Films = () => {
    const dispatch = useDispatch();
    const movieText = "Harry";
    const showText = "Scandal";

    React.useEffect(() => {
        dispatch(API.fetchAsyncMovies(movieText));
        dispatch(API.fetchAsyncShows(showText));
    }, [dispatch]);    

    return (
        <React.Fragment>
            <aside className="banner-img"></aside>
            <MovieListing />
        </React.Fragment>
    );
};



// const URL = "https://www.omdbapi.com";
// const APIKey = "a6405302";
