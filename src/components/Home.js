import { useState } from "react";
import AppBody from "./AppBody";

function Home() {
  let [list] = useState(Array.from({ length: 12 }));

  return (
    <>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "300px" }}
      >
        <div
          className="col-11 col-md-10 h3"
          style={{ fontFamily: "cursive", textAlign: "center" }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
          dignissimos quam, ab labore laudantium ullam consequuntur perferendis
          culpa repellat dolor velit non sequi, eligendi cupiditate minus nisi
          harum tempore iure?
        </div>
      </div>

      <div className="row">
        {list.map((item, index) => (
          <div key={index} className="col-12 col-md-4">
            <div className="card">
              <img
                src={"https://picsum.photos/200" + index}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
