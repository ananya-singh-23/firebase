import { getDatabase, ref, set } from "firebase/database";
import React from "react";
import { app } from "../context/firebase";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Route, Routes } from "react-router-dom";


const db = getDatabase(app);
const auth = getAuth(app);


const Adding = () => {
    const handleSignup = () => {
    createUserWithEmailAndPassword(auth, "sachin@example.com", "123456")
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const putdata = () => {
    set(ref(db, "users/1"), {
      id: 1,
      age: 20,
      username: "sachin sharma",
      email: "sachin@example.com",
    });
  };
  return (
    <div>
      <button onClick={putdata}>Put Data</button>
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  )
}

export default Adding
