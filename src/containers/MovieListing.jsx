import React from "react";
import "./MovieListing.scss";
import Slider from "react-slick";
import { Settings } from "../global/ReactSlick";
import { useSelector } from "react-redux";
import { Card } from "../components/Card";

export const MovieListing = () => {    
    const movies = useSelector((state) => state.movies.movies);
    const shows = useSelector((state) => state.movies.shows);
    let renderMovies, renderShows = "";
    
    renderMovies = movies.Response === "True" ? 
    (
        movies.Search.map((movie, index) => (
            <Card key={index} data={movie} />
        ))
    ) : (
        <aside className="movies-error">
            <h3>{movies.Error}</h3>
        </aside>
    );

    renderShows = shows.Response === "True" ? 
    (
        shows.Search.map((show, index) => (
            <Card key={index} data={show} />
        ))
    ) : (
        <aside className="movies-error">
            <h3>{shows.Error}</h3>
        </aside>
    );

    return (
        <React.Fragment>
            <main className="movie-wrapper">
                <section className="movie-list">
                    <h2>Movies</h2>
                    <aside 
                        className="movie-container"
                        >
                            <Slider {...Settings}>
                                {renderMovies}
                            </Slider>
                    </aside>
                </section>
                <section className="show-list">
                    <h2>TV Shows</h2>
                    <aside 
                        className="movie-container"
                        >
                            <Slider {...Settings}>
                                {renderShows}
                            </Slider>
                    </aside>
                </section>
            </main>
        </React.Fragment>
    );
};



