import React,{useState }from 'react'
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app,useFirebase } from "../firebase";
//const auth = getAuth(app);



const signupPage2 = () => {
  const firebase = useFirebase();
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState(""); 

/*const createUser = () => {
    signupWithEmailAndPassword(email, password);
};*/  
  return (
    <div>
        <h1>Sign Up</h1>
        <br />
        <label >Email</label>
        <input 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email" placeholder='Enter your email' />
        <br />
        <br />
        <label >Password</label>
        <input 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password" 
        required
        placeholder='Enter your password' />
        <br />
        <br />
        <button onClick={()=>signupWithEmailAndPassword(email, password)}>Sign Up</button>
    
    </div>
  )

};

export default signupPage2 
