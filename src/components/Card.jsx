import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";

export const Card = (props) => {
    return (
        <main className="card">
            <Link to={`/movie/${props.data.imdbID}`}>
                <aside className="card__top">
                    <img 
                        src={props.data.Poster} 
                        alt={props.data.Title} 
                    />
                </aside>
                <aside className="card__bottom">
                    <div className="card__bottom-info">
                        <h4>{props.data.Title}</h4>
                        <p>{props.data.Year}</p>
                    </div>
                </aside>
            </Link>
        </main>
    );
};



