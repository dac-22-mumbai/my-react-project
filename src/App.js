import { useState } from "react";

function App() {
  let [list, setList] = useState([]);

  let addNewItem = () => {
    const list1 = ["mumbai", ...list];
    setList(list1);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <input type="button" value="Send" onClick={addNewItem} />

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;
