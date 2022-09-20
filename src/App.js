import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = () => {
    // task is save the form
    console.log(username, password, email, mobile);
  };

  return (
    <div>
      <h1>Forms Elements</h1>

      <input
        className="form-control"
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={handleChangeUsername}
      />

      <input
        className="form-control"
        type="password"
        placeholder="Enter Passwrod"
        value={password}
        onChange={handleChangePassword}
      />

      <input
        className="form-control"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={handleChangeEmail}
      />

      <input
        className="form-control"
        type="mobile"
        placeholder="Enter Mobile"
        value={mobile}
        onChange={handleChangeMobile}
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
