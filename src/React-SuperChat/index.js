import React from "react";
import './style.css';
import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./Components/ChatRoom";
import SignIn from "./Components/SignIn";

const FirebaseSuperChat = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};

export default FirebaseSuperChat;
