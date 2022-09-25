import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let formRef = useRef();
  let navigate = useNavigate();

  const processLogin = (e) => {
    // validation
    e.preventDefault();
    e.stopPropagation();

    formRef.current.classList.add("was-validated");
    if (!formRef.current.checkValidity()) {
      return;
    }

    // api call

    // store jwt
    localStorage.setItem("appjwt", "abcd true");

    // forward the user to home page
    navigate(0);
  };

  return (
    <div>
      <form ref={formRef} className="needs-validation " noValidate>
        <div className="mb-1">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Username"
            required
          />
          <div className="invalid-feedback">Username is required</div>
        </div>

        <div className="mb-1">
          <input
            type="password"
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
      </form>
    </div>
  );
}

export default Login;
