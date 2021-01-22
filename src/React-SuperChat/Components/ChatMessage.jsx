import React from "react";
import { auth } from "../Firebase";

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="name" />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
