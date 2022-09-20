import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    // task is save the form
    console.log(username);
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
        className="btn btn-primary w-100 mt-2"
        type="button"
        value="Submit"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default App;
