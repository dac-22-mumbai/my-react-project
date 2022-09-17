import { useState } from "react";

function App() {
  let [messageList, setMessageList] = useState([]);
  let [message, setMessage] = useState("");

  let handleMessageChange = (e) => {
    console.log(e.target.value);
    setMessage(e.target.value);
  };

  let addMessage2MessageList = () => {
    let newMessageList = [message, ...messageList];
    setMessageList(newMessageList);

    setMessage("");
  };

  return (
    <div>
      <h1>Messageing APP</h1>

      <input
        type="text"
        placeholder="Whatssapppp...."
        value={message}
        onChange={handleMessageChange}
      />
      <input type="button" value="Send" onClick={addMessage2MessageList} />

      {messageList.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;
