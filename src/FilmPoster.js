import React from "react";

class FilmPoster extends React.Component {

    render() {
        const posterUrl = "https://image.tmdb.org/t/p/w780/" + this.props.posterUrl;

        return (
            <div className="film-poster">
                <img src={posterUrl} alt="" />
            </div>

        );
    }
}


export default FilmPoster;

