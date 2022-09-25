import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let formRef = useRef();
  let navigate = useNavigate();
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({ username: "", password: "" });
  let inputChangeHadler = (e) => {
    const newuser = { ...user, [e.target.name]: e.target.value };
    setUser(newuser);
  };

  const processLogin = async (e) => {
    try {
      // validation
      e.preventDefault();
      e.stopPropagation();

      formRef.current.classList.add("was-validated");
      if (!formRef.current.checkValidity()) {
        return;
      }

      // api call
      const url = "http://localhost:8080/auth/authenticate/";
      const resp = await axios.post(url, user);

      if (resp.status == "200") {
        // store jwt
        // let data = resp.data.jwt;
        localStorage.setItem("appjwt", resp.data.jwt);

        // forward the user to home page
        navigate(0);
      }
    } catch (e) {
      console.error(e);
      setIsError(true);

      setTimeout(() => setIsError(false), 2500);
    }
  };

  return (
    <div>
      <form ref={formRef} className="needs-validation " noValidate>
        <div className="mb-1">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Username"
            name="username"
            onChange={inputChangeHadler}
            required
          />
          <div className="invalid-feedback">Username is required</div>
        </div>

        <div className="mb-1">
          <input
            type="password"
            name="password"
            onChange={inputChangeHadler}
            className="form-control form-control-lg"
            placeholder="Enter Password"
            required
          />
          <div className="invalid-feedback">Password is required</div>
        </div>

        <input
          type="button"
          value="Login"
          className="btn btn-outline-success w-100"
          onClick={processLogin}
        />

        {isError && (
          <div className="alert alert-danger">
            Invalid Credentials or Network Error!
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
