import React from 'react'
import Heading from '../components/Header';
import { Link } from 'react-router-dom'
import { movies } from '../Data';
import { kebabCase } from 'lodash';


export default function TopMovies() {
    return (
        <div>
            <Heading />
            <div className="container">
                <div className="columns my-6 is-multiline">
                    {movies.map(movie => {
                        return (
                            <div className="column is-one-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd">
                                <Link to={`/movie/${kebabCase(movie.Title)}`} >
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                            <img className="movieCardPoster" src={movie.Poster} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-48x48">
                                                <img src={movie.Poster} alt="Placeholder image" />
                                                </figure>
                                            </div>
                                            <div className="media-content">
                                                <p className="title is-4">{movie.Title}</p>
                                                <p className="subtitle is-6">{movie.Director} ‧ {movie.Year}</p>
                                            </div>
                                            </div>

                                            <div className="content contentHeight">
                                                {movie.Plot}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
