import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.on("hello", (data) => {
      setMessages((prevMessages) => [...prevMessages, data.message]);
      console.log("Connected to server");
    });
  }, []);

  return (
    <>
      <div>
        <h1>Messages</h1>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
