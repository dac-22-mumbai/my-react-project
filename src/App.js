function App() {
  let list = ["Andorid", "Apple", "Samsumg"];

  return (
    <>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <hr />
      <div>
        {list.map((item) => (
          <h1>{item}</h1>
        ))}
      </div>

      <hr />
      <div>{list.map((item) => item)}</div>
    </>
  );
}

/**
 *  () -> {}
 *  () => {}
 */

export default App;
