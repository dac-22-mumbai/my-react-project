function App() {
  let count = 1;

  let increment = () => {
    count++;
    console.log(count);
  };

  return (
    <div>
      <h1>State Funadamental</h1>

      <h1>Like {count} </h1>
      <input type="button" value="Like Me" onClick={increment} />
    </div>
  );
}

export default App;
