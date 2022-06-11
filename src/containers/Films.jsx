import React from "react";
import { useDispatch } from "react-redux";
import { List } from "./List";
import { API } from "../global/FetchAPI";

export const Films = () => {
    const dispatch = useDispatch();
    const filmText = "Star Trek";
    const showText = "Blacklist";

    React.useEffect(() => {
        dispatch(API.getFilms(filmText));
        dispatch(API.fetchShows(showText));
    }, [dispatch]);    

    return (
        <React.Fragment>
            <List />
        </React.Fragment>
    );
};




