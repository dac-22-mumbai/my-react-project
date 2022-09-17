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
      <h1 className="bg-success text-light p-3">Messageing APP</h1>

      <input
        className="form-control form-control-lg my-1"
        style={{ height: "60px" }}
        type="text"
        placeholder="Whatssapppp...."
        value={message}
        onChange={handleMessageChange}
      />
      <input
        className="btn btn-outline-success w-100"
        type="button"
        value="Send"
        onClick={addMessage2MessageList}
      />

      {messageList.map((item) => (
        <div className="alert alert-success m-0 my-1">{item}</div>
      ))}
    </div>
  );
}

export default App;
