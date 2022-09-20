import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  const handleInputChange = (e) => {
    const newuser = { ...user, [e.target.name]: e.target.value };
    setUser(newuser);
  };

  const handleSubmit = () => {
    console.log(user);

    // {...} / [...]
    const newlist = [user, ...list];
    setList(newlist);

    // Clear the form
    setUser({
      username: "",
      password: "",
      email: "",
      mobile: "",
    });
  };

  return (
    <div>
      <h1>Forms Elements</h1>

      {/** FORM PARTS */}
      <div>
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

      {/** DISPLAY THE LIST */}
      {list.map((item, index) => (
        <h1>{item.username}</h1>
      ))}
    </div>
  );
}

export default App;
