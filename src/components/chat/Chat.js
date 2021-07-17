import "./chat.css";
import { useState, useRef } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "../message/Message";

export default function Chat({ user }) {
  const firestore = firebase.firestore();
  const [message, setMessage] = useState("");
  const { uid, photoURL } = user;
  const scroll = useRef();

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await messagesRef.add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setMessage("");

    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="chat">
        {messages &&
          messages.map((msg) => (
            <Message key={msg.id} message={msg} user={user} />
          ))}
        <span ref={scroll}></span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" disabled={!message}>
          🚀
        </button>
      </form>
    </>
  );
}
