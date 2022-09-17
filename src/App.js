import { useState } from "react";

function App() {
  // Stateless Variable :: DOM WILL NOT GET UPDATE :: Page Will Not Update
  // let count = 1;

  // Stateful Variable :: DOM WILL UPDATE ;: PAGE WILL UPDATE
  let [count, setCount] = useState(1);

  let increment = () => {
    // variable update
    count++;

    // State Update :: Page update :: DOM UPDATE
    setCount(count);
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
