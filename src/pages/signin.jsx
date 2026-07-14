import React,{useState }from 'react'
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);

const Signin = () => {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState(""); 

const handleSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("User signed in successfully!"))
      .catch((err) => console.log("Error signing in!", err)    
      );}
  

  return (
    <div>
    
       
        <br />
        <h2>Sign In Page</h2>
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
        <button onClick={handleSignin}>Sign In</button>
      
    </div>
  )

};

export default Signin 
