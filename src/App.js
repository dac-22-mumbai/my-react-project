import "./App.css";

function App() {
  let style1 = { backgroundColor: "red", color: "white" };

  return (
    <div>
      <h1 className="beautify">Hello World</h1>

      <hr />
      <h1 style={style1}>Hello World</h1>

      <hr />
      <h1 style={{ backgroundColor: "royalblue", color: "white" }}>
        Hello World
      </h1>
    </div>
  );
}

export default App;
