import React from "react";
import user from "../img/favicon.ico";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";

export const Header = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = React.useState("");

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(API.fetchAsyncMovies(term));
        dispatch(API.fetchAsyncShows(term));
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
                        value={term} 
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


