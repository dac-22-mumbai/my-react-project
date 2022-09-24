import axios from "axios";
import { useState } from "react";

function Playground() {
  return (
    <div>
      <Playground1 />
    </div>
  );
}

function Playground1() {
  let [list, setList] = useState([]);

  // this function is making call to backend
  const makeApiCall = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const response = await axios.get(url);
    // console.log(response);

    const newlist = response.data;
    setList(newlist);
  };

  return (
    <div>
      <h1>Playground 1</h1>

      <input type="button" value="Call Backend" onClick={makeApiCall} />

      {list.map((item, index) => (
        <div key={index} className="alert alert-success m-0 mb-1">
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default Playground;
