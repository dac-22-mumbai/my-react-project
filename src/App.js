import { useState } from "react";

function App() {
  // let message = "Hello World";
  let [message, setMessage] = useState("Hello Universe");

  // let count = 100;
  let [count, setCount] = useState(100);

  // let active = true;
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  let login = () => {
    setIsLoggedIn(true);
  };
  let logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Hello World</h1>

      {isLoggedIn ? <h1>{message}</h1> : <h1>Please Login</h1>}
      {isLoggedIn && <h1>{message}</h1>}

      <h1>{count}</h1>

      <input type="button" value="Login" onClick={login} />
      <input type="button" value="Logout" onClick={logout} />
    </div>
  );
}

export default App;
