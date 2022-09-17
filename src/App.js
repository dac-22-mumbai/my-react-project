function App() {
  let id = "1";
  let message = "Hello Universer";

  return (
    <div>
      <h1>Interpolation at Attribute / Dynamic Attribute</h1>
      <h1 id={id}>{message}</h1>
      <h1>{message}</h1>

      <hr />
      <h1 id="id1">{message}</h1>
      <h1>{message}</h1>

      <hr />
      <h1>Hello World</h1>
      <h1 id="h1">Hello World</h1>
    </div>
  );
}

export default App;
