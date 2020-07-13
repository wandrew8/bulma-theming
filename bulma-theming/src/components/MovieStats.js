import React from 'react'

export default function MovieStats(props) {
    const {metascore, imdbRating, imdbVotes, rottenTomatoes} = props;
    return (
        <nav class="level is-mobile">
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">Metascore</p>
                <p class="title">{metascore}</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">IMDB Rating</p>
                <p class="title">{imdbRating}</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">IMDB Votes</p>
                <p class="title">{imdbVotes}</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">Rotten Tomatoes</p>
                <p class="title">{rottenTomatoes}</p>
                </div>
            </div>
        </nav>
    )
}
