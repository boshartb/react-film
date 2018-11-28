import React from "react";
import FilmRow from './FilmRow';

class FilmListing extends React.Component {
  render() {
    const { films } = this.props;
    return (
      <div>
        {
          films.map((film) => (
            <FilmRow film={film} key={film.id} />
          ))
        }
      </div>
    );
  }
}


export default FilmListing;
