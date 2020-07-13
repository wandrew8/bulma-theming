import React from 'react'
import Heading from '../components/Header';
import MovieStats from '../components/MovieStats'
import { movies } from '../Data';

export default function Movie(props) {
    const singleMovie = movies.filter(movie => props.match.params.movieName.split("-").join(" ") === movie.Title.toLowerCase());
    return (
        <div>
            <Heading />
            {singleMovie.map(movie => {
                const {Ratings, Title, Year, Rated, Runtime, Plot, Director, Released, Poster, imdbVotes, Metascore} = movie
                const actorsArray = movie.Actors.split(",")
                return(
                    <div className="container is-fluid">
                        <MovieStats imdbRating={Ratings[0].Value} rottenTomatoes={Ratings[1].Value} imdbVotes={imdbVotes} metascore={Metascore} />
                        <div class="tile is-ancestor">
                        <div class="tile is-vertical is-8">
                            <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <article class="tile shadow is-child notification ">
                                <p class="title pb-2">{Title}</p>
                                <p class="subtitle is-size-5 pb-3">{Director} ‧ {Year}</p>
                                <p class="subtitle">Rating: {Rated}</p>
                                <p class="subtitle">Runtime: {Runtime}</p>
                                <p class="subtitle">Release Date: {Released}</p>

                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile shadow is-child notification ">
                                <p class="title pb-2">Cast</p>
                                {actorsArray.map(actor => {
                                    return(
                                        <p class="subtitle">{actor}</p>
                                    )
                                })}
                                </article>
                            </div>
                            </div>
                            <div class="tile is-parent">
                            <article class="tile shadow is-child notification ">
                                <p class="title pb-2">Plot Summary</p>
                                <p class="subtitle">{Plot}</p>
                                <div class="content">
                                </div>
                            </article>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile shadow is-child notification ">
                                <figure class="image is-4by4">
                                    <img src={Poster}/>
                                </figure>
                            </article>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
