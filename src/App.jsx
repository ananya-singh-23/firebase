import { getDatabase, ref, set } from "firebase/database";
import React from "react";
import { app } from "./firebase";
import Signup from "./pages/signup.jsx";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import Adding from "./pages/adding.jsx";
import Signin from "./pages/signin.jsx";

const db = getDatabase(app);
const auth = getAuth(app);

const App = () => {
  

  return (
    <div>
      <h1>Connect Firebase with React</h1>
      <div>
        <a href="/signup">Sign Up</a>
        <a href="/adding">Adding</a>
        <a href="/signin">Sign In</a>

      </div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/adding" element={<Adding />} />
      </Routes>
    </div>
  );
};

export default App;
