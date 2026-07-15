import React from 'react'
import { getAuth } from "firebase/auth";
import { app } from "../firebase.js";
const auth = getAuth(app);
import { useEffect } from 'react';



const Home = () => {
    const[user,setUser] = React.useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        console.log("User is signed in:", user);
        setUser(user);
      } else {
        console.log("User is signed out");
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]); 
  return (
     <div>
        <h1>Hello, {user ? user.email : "Guest"}!</h1>
        {user ? (
          <button onClick={() => auth.signOut()}>Sign Out</button>
        ) : (
          <p>Please sign in to access more features.</p>
        )}
      </div>
  )
}

export default Home