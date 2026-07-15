import React,{useState }from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);

const signupPage = () => {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState(""); 

const createUser = () => {
    createUserWithEmailAndPassword(auth,email , password).then((value) => alert("User created successfully!"));
};
  return (
    <div>
      
       
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
        <button onClick={createUser}>Sign Up</button>
    
    </div>
  )

};

export default signupPage 