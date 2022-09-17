import { useState } from "react";

function App() {
  let [movieList, setMovieList] = useState([]);

  let [movieName, setMovieName] = useState("");
  let [movieReview, setMovieReview] = useState("");

  let handleMovieNameChange = (e) => {
    setMovieName(e.target.value);
  };

  let handleMovieReviewChange = (e) => {
    setMovieReview(e.target.value);
  };

  let addMovieReview = () => {
    console.log(movieName, movieReview);

    let newMovieItem = { movieName: movieName, movieReview: movieReview };
    let newMovieList = [newMovieItem, ...movieList];
    setMovieList(newMovieList);

    // debug purpose
    console.log(newMovieList);

    setMovieName("");
    setMovieReview("");
  };

  return (
    <div>
      <h1>Form Registration</h1>

      <input
        className="form-control my-1"
        type="text"
        placeholder="Movie Name"
        value={movieName}
        onChange={handleMovieNameChange}
      />
      <textarea
        className="form-control my-1"
        placeholder="Movie Review"
        value={movieReview}
        onChange={handleMovieReviewChange}
      ></textarea>

      <input
        className="btn btn-secondary w-100"
        type="button"
        value="Submit"
        onClick={addMovieReview}
      />

      {/** Display the Reviews */}
      {movieList.map((item) => (
        <div className="alert alert-secondary m-0 my-1">
          <strong className="text-capitalize">{item.movieName}</strong>
          {item.movieReview}
        </div>
      ))}
    </div>
  );
}

export default App;
