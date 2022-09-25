import axios from "axios";
import { useRef } from "react";
import { useEffect, useState } from "react";

function Playground() {
  return (
    <div>
      <Playground5 />
    </div>
  );
}

function Playground5() {
  const formref = useRef();
  const [user, setUser] = useState({ username: "", password: "" });

  const inputChangeHandler = (e) => {
    const newuser = { ...user, [e.target.name]: e.target.value };
    setUser(newuser);
  };

  const submitform = (e) => {
    e.preventDefault();
    e.stopPropagation();

    formref.current.classList.add("was-validated");

    console.log(formref.current);
  };

  return (
    <div>
      <h1>Hello</h1>

      <form ref={formref} class="row g-1 needs-validation">
        <div>
          <input
            type="text"
            class="form-control"
            name="username"
            value={user.username}
            onChange={inputChangeHandler}
            minLength="3"
            maxLength="8"
            required
          />
          <div className="valid-feedback">Username is ok</div>
          <div className="invalid-feedback">Username is reequired</div>
        </div>

        <div>
          <input
            type="password"
            class="form-control"
            name="password"
            value={user.password}
            onChange={inputChangeHandler}
            required
          />
          <div className="valid-feedback">password is ok</div>
          <div className="invalid-feedback">password is reequired</div>
        </div>

        <input type="button" value="submit" onClick={submitform} />
      </form>
    </div>
  );
}

function Playground4() {
  const createUpdateRecord = async () => {
    const url = "http://localhost:8080/user/2";
    const data = {
      username: "appleV1",
      password: "appleV1",
      email: "apple@appleV1.com",
      mobile: "222222",
    };

    await axios.put(url, data);
  };

  return (
    <div>
      <h1>Playground 4 / Update Operation</h1>
      <input type="button" value="UPdate Record" onClick={createUpdateRecord} />
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
