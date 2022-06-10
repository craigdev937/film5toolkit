import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

export const MovieCard = (props) => {
    return (
        <main className="card-item">
            <Link to={`/movie/${props.data.imdbID}`}>
                <section className="card-inner">
                    <aside className="card-top">
                        <img 
                            src={props.data.Poster} 
                            alt={props.data.Title} 
                        />
                    </aside>
                    <aside className="card-bottom">
                        <div className="card-info">
                            <h4>{props.data.Title}</h4>
                            <p>{props.data.Year}</p>
                        </div>
                    </aside>
                </section>
            </Link>
        </main>
    );
};



