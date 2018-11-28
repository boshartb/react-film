import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMND from "./TMDB";

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {TMND.films.map((films, index) => (
            <FilmListing key={index} />
          ))}

        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </div>
      </div>
    );
  }
}

export default App;

// import { TMDB as Data } from "./TMDB";

// pass by refenece
// handleClick = e => {
//   console.log("clicked");
// };
// let allFilms = this.props.films.map( (film, index) => ( your-jsx-per-film-here )

// class App extends Component {
//   render() {
//     return (
//       <div className="film-library">
//         < className="film-list">
//           <h1 className="section-title">FILMS</h1>
//           { {Data.films.map((e, i) => (
//            <FilmListing key={i} clicked={} />
//          ))} }
//         </div>

//         <div className="film-details">
//           <h1 className="section-title">DETAILS</h1>
//         </div>
//       </div>
//     );
//   }
// }
