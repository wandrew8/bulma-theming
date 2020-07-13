import React from 'react'

export default function Comments() {
    const alertUser = () => {
        alert("Sorry, this is just for show. It doesn't work")
    }
    return (
        <div className="container">

        <div className="box my-6">
        <p className="title">Comments</p>
            <article class="media is-mobile">
                <figure class="media-left">
                    <p class="image is-64x64">
                    <img src="https://picsum.photos/200/200" />
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                    <p>
                        <strong>Barbara Middleton</strong>
                        <br/>
                        This doesn't work, It's really just a placeholder.
                        <br/>
                        <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
                    </p>
                    </div>

                    <article class="media">
                    <figure class="media-left">
                        <p class="image is-48x48">
                        <img src="https://picsum.photos/100/100" />
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                        <p>
                            <strong>Sean Brown</strong>
                            <br/>
                            Oh, Really? That's pretty lame!
                            <br/>
                            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                        </p>
                        </div>
                    </div>
                    </article>

                    <article class="media">
                    <figure class="media-left">
                        <p class="image is-48x48">
                        <img src="https://picsum.photos/150/150" />
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                        <p>
                            <strong>Kayli Eunice </strong>
                            <br/>
                            Really, Barabara? That's the best you could do?!
                            <br/>
                            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                        </p>
                        </div>
                    </div>
                    </article>
                </div>
                </article>
                <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                    <img src="https://picsum.photos/75/75" />
                    </p>
                </figure>
                <div class="media-content">
                    <div class="field">
                    <p class="control">
                        <textarea class="textarea" placeholder="Add a comment..."></textarea>
                    </p>
                    </div>
                    <div class="field">
                    <p class="control">
                        <button onClick={alertUser} class="button">Post comment</button>
                    </p>
                    </div>
                </div>
                </article>
        </div>
        </div>
    )
}
