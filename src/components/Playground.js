import axios from "axios";
import { useState } from "react";

function Playground() {
  let [list, setList] = useState([]);

  // MAKING API CALL
  const makeApiCall = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    let res = await axios.get(url);
    console.log(res);

    const newlist = res.data;
    setList(newlist);
  };

  return (
    <div>
      <h1>Playgroun</h1>

      <input
        type="button"
        value="MAKE API/AJAX/HTTP CALL"
        onClick={makeApiCall}
      />

      {list.map((item, index) => (
        <div key={index} className="alert alert-success m-0 mb-1">
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default Playground;
