import axios from "axios";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SimpleForm() {
  let formRef = useRef();
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let isedit = searchParams.get("edit");
  let editId = searchParams.get("id");

  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const url = `http://localhost:8080/user/${editId}`;
    const response = await axios.get(url);

    console.log(response.data);
    setUser(response.data);
  };

  const inputChangeHandler = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);
  };

  const go2simplelist = () => {
    navigate("/simplelist");
  };

  const createNewUser = async (e) => {
    try {
      // stop the default form handler
      e.preventDefault();
      e.stopPropagation();

      // vlidation logic
      formRef.current.classList.add("was-validated");
      if (!formRef.current.checkValidity()) {
        return;
      }

      // ALL GOOD THEN BELOW STTMENT WILL BE EXECUTED
      console.log(user);
      const url = "http://localhost:8080/user/";
      await axios.post(url, user);

      setUser({ username: "", password: "", email: "", mobile: "" });
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2500);

      formRef.current.classList.remove("was-validated");
    } catch (e) {
      setIsError(true);
      setTimeout(() => setIsError(false), 2500);
    }
  };

  const updateUser = async (e) => {
    try {
      // stop the default form handler
      e.preventDefault();
      e.stopPropagation();

      // vlidation logic
      formRef.current.classList.add("was-validated");
      if (!formRef.current.checkValidity()) {
        return;
      }

      const url = `http://localhost:8080/user/${editId}`;
      await axios.put(url, user);

      setUser({ username: "", password: "", email: "", mobile: "" });
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2500);

      formRef.current.classList.remove("was-validated");
    } catch (e) {
      setIsError(true);
      setTimeout(() => setIsError(false), 2500);
    }
  };

  return (
    <div>
      <div className="alert alert-light h1 m-0">Basic Form {editId}</div>

      <form ref={formRef} className="needs-validation" novalidate>
        <div className="mb-2">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Enter Username"
            name="username"
            value={user.username}
            onChange={inputChangeHandler}
            minLength="3"
            required
          />
          <div className="valid-feedback">Username is OK ✅</div>
          <div className="invalid-feedback">Username is Invalid 👎</div>
        </div>

        <div className="mb-2">
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="Enter Password"
            name="password"
            value={user.password}
            onChange={inputChangeHandler}
            minLength="8"
            required
          />
          <div className="valid-feedback">Password is OK ✅</div>
          <div className="invalid-feedback">Password is Invalid ❌</div>
        </div>

        <div className="mb-2">
          <input
            className="form-control form-control-lg "
            type="email"
            placeholder="Enter Email"
            name="email"
            value={user.email}
            onChange={inputChangeHandler}
            pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
            required
          />
          <div className="valid-feedback">Email is OK ✅</div>
          <div className="invalid-feedback">Email is Invalid ❌</div>
        </div>

        <div className="mb-2">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Enter Mobile"
            name="mobile"
            value={user.mobile}
            onChange={inputChangeHandler}
            minLength="10"
            maxLength="10"
            required
          />
          <div className="valid-feedback">Mobile is OK ✅</div>
          <div className="invalid-feedback">Mobile is Invalid ❌</div>
        </div>

        {isedit ? (
          <input
            className="btn btn-lg btn-outline-success w-100"
            type="button"
            value="Update"
            onClick={updateUser}
          />
        ) : (
          <input
            className="btn btn-lg btn-outline-success w-100"
            type="button"
            value="Submit"
            onClick={createNewUser}
          />
        )}

        {isSuccess && (
          <div className="alert alert-success">Operation Successfully</div>
        )}

        {isError && (
          <div className="alert alert-danger">
            Error Please Try After some time!
          </div>
        )}
      </form>
    </div>
  );
}

export default SimpleForm;
