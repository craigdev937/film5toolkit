import React from "react";
import "./MovieDetail.scss";
import "./Detail.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";
import { FilmActions } from "../global/FilmSlice";

export const MovieDetail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(
        (state) => state.films.getFilmOrShow);

    React.useEffect(() => {
        dispatch(API.getFilmOrShow(imdbID));
        return () => {
            dispatch(FilmActions.removeFOS());
        };
    }, [dispatch, imdbID]);

    return (
        <main className="movie-section">
            {Object.keys(data).length === 0 ? (
                <section>...Loading</section>
            ) : (
                <React.Fragment>
                <section className="section-left">
                    <aside className="movie-title">
                        {data.Title}
                    </aside>
                    <aside className="movie-rating">
                        <span>IMDB Rating 
                            <i className="fa fa-star"> : {data.imdbRating}</i>
                        </span>
                        <span>IMDB Votes 
                            <i className="fa fa-thumbs-up"> : {data.imdbVotes}</i>
                        </span>
                        <span>Runtime 
                            <i className="fa fa-film"> : {data.Runtime}</i>
                        </span>
                        <span>Year 
                            <i className="fa fa-calendar"> : {data.Year}</i>
                        </span>
                    </aside>
                    <aside className="movie-plot">{data.Plot}</aside>
                    <aside className="movie-info">
                        <div>
                            <span>Director</span>
                            <span>{data.Director}</span>
                        </div>
                        <div>
                            <span>Stars</span>
                            <span>{data.Actors}</span>
                        </div>
                        <div>
                            <span>Genres</span>
                            <span>{data.Genre}</span>
                        </div>
                        <div>
                            <span>Languages</span>
                            <span>{data.Language}</span>
                        </div>
                        <div>
                            <span>Awards</span>
                            <span>{data.Awards}</span>
                        </div>
                    </aside>
                </section>
                <section className="section-right">
                    <img src={data.Poster} alt={data.Title} />
                </section>
            </React.Fragment>
            )}
        </main>
    );
};


