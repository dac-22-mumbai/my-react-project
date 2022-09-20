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

  const handleEdit = (item, index) => {};

  const handleDelete = (item, index) => {
    console.log("Handle Delte....", item);

    // delete from the list
    list.splice(index, 1);

    const newlist = [...list];
    setList(newlist);
  };

  return (
    <div>
      <h1 className="bg-primary text-light p-3">Forms Elements</h1>

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
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.username}</td>
              <td>{"*****"}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>

              <td>
                <span
                  role="button"
                  className="badge bg-primary"
                  // onClick={ handleEdit }
                  onClick={() => handleEdit(item, index)}
                >
                  Edit
                </span>
                <span
                  role="button"
                  className="badge bg-danger"
                  // onClick={ handleDelete }
                  onClick={() => handleDelete(item, index)}
                >
                  Del
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
