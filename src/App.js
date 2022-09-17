function App() {
  // Data Member
  let message = "Hello";

  // Member Function
  let clickMe = () => {
    alert();
  };

  return (
    <div>
      <h1>Event Handling</h1>
      <input type="button" value="Click Me" id={message} onClick={clickMe} />
    </div>
  );
}

export default App;
