import React from "react";
import user from "../img/favicon.ico";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";

export const Header = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = React.useState("");

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(API.getFilms(query));
        dispatch(API.fetchShows(query));
    };

    return (
        <React.Fragment>
        <main className="header">
            <section className="logo">
                <Link to="/">Films and Shows</Link>
            </section>
            <section className="search-bar">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={query} 
                        placeholder="Search Movies or Shows" 
                        onChange={handleChange}
                    />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </section>
            <section className="user-image">
                <img src={ user } alt="user" />
            </section>
        </main>
        </React.Fragment>
    );
};


