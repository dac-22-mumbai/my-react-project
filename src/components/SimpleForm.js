import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SimpleForm() {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let isedit = searchParams.get("edit");

  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  const inputChangeHandler = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);
  };

  const go2simplelist = () => {
    navigate("/simplelist");
  };

  const createNewUser = async () => {
    try {
      console.log(user);
      const url = "http://localhost:8080/user/";
      await axios.post(url, user);

      setUser({ username: "", password: "", email: "", mobile: "" });
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2500);
    } catch (e) {
      setIsError(true);
      setTimeout(() => setIsError(false), 2500);
    }
  };

  return (
    <div>
      <div className="alert alert-light h1 m-0">Basic Form</div>

      <div>
        <input
          className="form-control form-control-lg mb-1"
          type="text"
          placeholder="Enter Username"
          name="username"
          value={user.username}
          onChange={inputChangeHandler}
        />

        <input
          className="form-control form-control-lg mb-1"
          type="password"
          placeholder="Enter Password"
          name="password"
          value={user.password}
          onChange={inputChangeHandler}
        />

        <input
          className="form-control form-control-lg mb-1"
          type="text"
          placeholder="Enter Email"
          name="email"
          value={user.email}
          onChange={inputChangeHandler}
        />

        <input
          className="form-control form-control-lg mb-1"
          type="text"
          placeholder="Enter Mobile"
          name="mobile"
          value={user.mobile}
          onChange={inputChangeHandler}
        />

        {isedit ? (
          <input
            className="btn btn-lg btn-success w-100"
            type="button"
            value="Update"
            onClick={go2simplelist}
          />
        ) : (
          <input
            className="btn btn-lg btn-success w-100"
            type="button"
            value="Submit"
            onClick={createNewUser}
          />
        )}

        {isSuccess && (
          <div className="alert alert-success">User Added Successfully</div>
        )}

        {isError && (
          <div className="alert alert-danger">
            Error Please Try After some time!
          </div>
        )}
      </div>
    </div>
  );
}

export default SimpleForm;
