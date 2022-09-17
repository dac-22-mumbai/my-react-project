import { useState } from "react";

function App() {
  // Stateful Variable
  let [list, setList] = useState([]);

  // Event Handler
  let addNewItem = () => {
    const inputMesage = document.getElementById("id1").value;
    const list1 = [inputMesage, ...list];
    setList(list1);

    document.getElementById("id1").value = "";
  };

  return (
    <div>
      <h1>Hello World</h1>
      <input type="text" id="id1" />
      <input type="button" value="Send" onClick={addNewItem} />

      {/** WOrk with list/map */}
      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;
