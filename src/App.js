function App() {
  // Data Member
  let message = "Hello";

  // Member Function
  let clickMe = () => {
    alert("Hello World");
  };

  let clickMe1 = (p1) => {
    alert(p1);
  };

  return (
    <div>
      <h1>Event Handling</h1>

      {/** With PARAM */}
      <input
        type="button"
        value="Click Android"
        onClick={() => clickMe1("Android")}
      />
      <input
        type="button"
        value="Click iPhone"
        onClick={() => clickMe1("iPhone")}
      />
      <input
        type="button"
        value="Click samsung"
        onClick={() => clickMe1("Samsung")}
      />

      {/** SIMPLEST - NO PARAM */}
      <input type="button" value="Click Me" onClick={clickMe} />
    </div>
  );
}

export default App;
