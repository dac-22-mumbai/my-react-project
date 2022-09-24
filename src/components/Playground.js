import axios from "axios";
import { useEffect, useState } from "react";

function Playground() {
  return (
    <div>
      <Playground3 />
    </div>
  );
}

function Playground3() {
  const createNewRecord = async () => {
    const url = "http://localhost:8080/user/";
    const data = {
      username: "madurai",
      password: "@#@#",
      email: "delhi@delhi.com",
      mobile: "2323232",
    };

    await axios.post(url, data);
  };

  return (
    <div>
      <h1>Playground 3</h1>
      <input
        type="button"
        value="Create New Record"
        onClick={createNewRecord}
      />
    </div>
  );
}

function Playground2() {
  let [list, setList] = useState([]);

  const makeApiCall = async () => {
    const url = "http://localhost:8080/user/";

    const response = await axios.get(url);

    const newlist = response.data;
    setList(newlist);
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  return (
    <div>
      <h1>Playground 2</h1>

      {list.map((item, index) => (
        <div key={index} className="alert alert-success m-0 mb-1">
          {item.username} / {item.email} / {item.mobile}
        </div>
      ))}
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
