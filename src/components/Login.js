import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const login = () => {
    localStorage.setItem("login", "true");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input type="button" value="Login" onClick={login} />
    </div>
  );
}

export default Login;
