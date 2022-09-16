function App() {
  let message = "Hello Message"; // String
  let user = { id: 1, name: "rohit" }; // OBJECT

  return (
    <div>
      <h1>Hello World</h1>
      <h1>{message}</h1>

      {/** DEBUGGING */}
      <h1>{JSON.stringify(user)} </h1>

      <h1>{user.name}</h1>
    </div>
  );
}

export default App;
