import React from "react";

class FilmListing extends React.Component {
  render() {
    // const allFilms = this.props.films.map((film, index)
    return (
      <div className="film-row">
        <img src={"https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg"} alt="" />

        <div className="film-summary">
          <h1>{this.props.title}title</h1>
          <p>{this.props.releasedate}Release Date</p>
        </div>
      </div>
    );
  }
}


export default FilmListing;
