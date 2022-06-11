import React from "react";
import "./List.css";
import Slider from "react-slick";
import { Settings } from "../global/ReactSlick";
import { useSelector } from "react-redux";
import { Card } from "../components/Card";

export const List = () => {    
    const films = useSelector((state) => state.films.films);
    const shows = useSelector((state) => state.films.shows);
    let renderFilms, renderShows = "";
    
    renderFilms = films.Response === "True" ? 
    (
        films.Search.map((film, index) => (
            <Card key={index} data={film} />
        ))
    ) : (
        <aside className="movies-error">
            <h3>{films.Error}</h3>
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
            <main>
                <section className="film__list">
                    <h2>Movies</h2>
                    <aside>
                            <Slider {...Settings}>
                                {renderFilms}
                            </Slider>
                    </aside>
                </section>
                <section className="show__list">
                    <h2>TV Shows</h2>
                    <aside>
                            <Slider {...Settings}>
                                {renderShows}
                            </Slider>
                    </aside>
                </section>
            </main>
        </React.Fragment>
    );
};



