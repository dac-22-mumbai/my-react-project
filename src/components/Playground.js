import axios from "axios";
import { useRef } from "react";
import { useEffect, useState } from "react";

function Playground() {
  return (
    <div>
      <Playground8 />
      <Playground9 />
    </div>
  );
}

function Playground9() {
  const makeApiCall = async () => {
    // API 1 CALL
    const url1 = "https://jsonplaceholder.typicode.com/posts";
    const resp1 = await axios.get(url1);
    console.log(resp1.data);

    // API2
    if (resp1.status == "200") {
      const url2 = "http://localhost:8080/user/";
      const resp2 = await axios.get(url2);
      console.log(resp2.data);
    }

    // API3
    const url3 = "http://localhost:8080/user/1";
    const resp3 = await axios.get(url3);
    console.log(resp3);
  };

  return (
    <div>
      <hr />
      <h1>Multiple API Call</h1>
      <input type="button" value="MakeAPICall" onClick={makeApiCall} />
    </div>
  );
}

function Playground8() {
  return (
    <div>
      <form className="needs-validation was-validated">
        <div>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Username"
            minLength="3"
            required
          />
          <div className="valid-feedback">Username is cool 👍 </div>
          <div className="invalid-feedback">User name is invalid 😠</div>
        </div>

        <div>
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Enter Password"
            minLength="3"
            required
          />
          <div className="valid-feedback">Passwod is Ok 👍</div>
          <div className="invalid-feedback">Passwod is invlid 👎</div>
        </div>
      </form>
    </div>
  );
}

function Playground7() {
  return (
    <div>
      <form className="needs-validation was-validated">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Username"
          minLength="3"
          required
        />
        <div className="valid-feedback">Username is cool 👍 </div>
        <div className="invalid-feedback">User name is invalid 😠</div>
      </form>
    </div>
  );
}

function Playground6() {
  let ref1 = useRef();

  const submitTheForm = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // dynamically adding the class
    ref1.current.classList.add("was-validated");

    if (!ref1.current.checkValidity()) {
      return;
    }

    // ALL GOOD...
    // API CALL....
  };

  return (
    <div>
      <form ref={ref1} className="needs-validation ">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Username"
          minLength="3"
          required
        />

        <input type="button" value="Submit" onClick={submitTheForm} />
      </form>
    </div>
  );
}

function Playground5() {
  return (
    <div>
      <form className="needs-validation was-validated">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Username"
          minLength="3"
          required
        />
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
