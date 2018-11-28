import React from "react";
import FilmPoster from "./FilmPoster";
// import FilmPoster from "./FilmPoster";


class FilmRow extends React.Component {
    render() {
        const filmTitle = this.props.film.title;
        const fullDate = new Date(this.props.film.release_date);
        const justYear = fullDate.getFullYear();
        // const filmYear = new Date(this.props.film.release_date);
        // const FilmYear = new Date(this.props.film.release_date);

        return (
            <div className="film-row">
                <FilmPoster posterUrl={this.props.film.poster_path} />
                <div className="film-summary">
                    <h1>{filmTitle}</h1>
                    <p>{justYear}</p>
                </div>
            </div>

        );
    }
}


export default FilmRow;
