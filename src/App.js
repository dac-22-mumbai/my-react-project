import { useRef, useState } from "react";

function App() {
  let inputRef = useRef();
  let [list, setList] = useState([]);

  let addNewItem = () => {
    console.log(document.getElementById("id1"));
    console.log(inputRef.current);

    const inputMesage = inputRef.current.value;
    const list1 = [inputMesage, ...list];
    setList(list1);

    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Messaging APp</h1>
      <input type="text" id="id1" ref={inputRef} />
      <input type="button" value="Send" onClick={addNewItem} />

      {/** WOrk with list/map */}
      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;
