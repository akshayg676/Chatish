import React from "react";
import Header from "./components/header/Header";
import Signin from "./components/signIn/Signin";
import Chat from "./components/chat/Chat";
import "./App.css";
import firebase from "firebase/app";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCVuMwOr7y7sKluef65NaWczwTKBq-818k",
  authDomain: "chat-app-4367f.firebaseapp.com",
  projectId: "chat-app-4367f",
  storageBucket: "chat-app-4367f.appspot.com",
  messagingSenderId: "952139790789",
  appId: "1:952139790789:web:ff2f67ad7afc425060f3ac",
  measurementId: "G-7C6DC0P0K9",
});

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Header auth={auth} user={user} />
      <section>{user ? <Chat user={user} /> : <Signin auth={auth} />}</section>
    </div>
  );
}

export default App;
