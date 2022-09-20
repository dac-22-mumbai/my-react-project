import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  const handleInputChange = (e) => {
    // console.log(e.target.name, e.target.value);

    // explain...
    const newuser = { ...user, [e.target.name]: e.target.value };
    setUser(newuser);
  };

  const handleSubmit = () => {
    // task is save the form
    console.log(user);
  };

  return (
    <div>
      <h1>Forms Elements</h1>

      <input
        name="username"
        className="form-control"
        type="text"
        placeholder="Enter Username"
        value={user.username}
        onChange={handleInputChange}
      />

      <input
        name="password"
        className="form-control"
        type="password"
        placeholder="Enter Passwrod"
        value={user.password}
        onChange={handleInputChange}
      />

      <input
        name="email"
        className="form-control"
        type="email"
        placeholder="Enter Email"
        value={user.email}
        onChange={handleInputChange}
      />

      <input
        name="mobile"
        className="form-control"
        type="mobile"
        placeholder="Enter Mobile"
        value={user.mobile}
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
