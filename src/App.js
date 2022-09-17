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
      <h1 className="bg-success text-light p-3">Form Registration</h1>

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
        className="btn btn-outline-success w-100"
        type="button"
        value="Submit"
        onClick={addMovieReview}
      />

      <div className="row">
        {movieList.map((item, index) => (
          <div className="col-sm-12 col-md-4  my-1">
            <div class="card">
              <img
                src={"https://picsum.photos/200" + index}
                style={{ height: "200px", objectFit: "cover" }}
                class="card-img-top"
                alt="..."
              />

              <div class="card-body">
                <h5 class="card-title text-capitalize">{item.movieName}</h5>
                <p class="card-text">{item.movieReview}</p>
                <a href="#" class="btn btn-outline-success">
                  Read Full Review
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
