import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleInputChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    if (e.target.name == "username") {
      setUsername(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "mobile") {
      setMobile(e.target.value);
    }
  };

  const handleSubmit = () => {
    // task is save the form
    console.log(username, password, email, mobile);
  };

  return (
    <div>
      <h1>Forms Elements</h1>

      <input
        name="username"
        className="form-control"
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={handleInputChange}
      />

      <input
        name="password"
        className="form-control"
        type="password"
        placeholder="Enter Passwrod"
        value={password}
        onChange={handleInputChange}
      />

      <input
        name="email"
        className="form-control"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={handleInputChange}
      />

      <input
        name="mobile"
        className="form-control"
        type="mobile"
        placeholder="Enter Mobile"
        value={mobile}
        onChange={handleInputChange}
      />

      <input
        className="btn btn-primary w-100 mt-2"
        type="button"
        value="Submit"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default App;
