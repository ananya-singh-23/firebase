import React,{useState }from 'react'
import { getAuth, createUserWithEmailAndPassword , GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import { app } from "../firebase";
import { href, Link } from 'react-router-dom';
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signupPage = () => {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState(""); 

const createUser = () => {
    createUserWithEmailAndPassword(auth,email , password).then((value) => alert("User created successfully!"));
};

const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);}
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
    <h2>or</h2>
    <br />
    
    <Link to="/">
      <button onClick={() => signupWithGoogle() } >Sign Up with Google</button>
    </Link>
    <br />
    <Link to="/signin">Already have an account? Sign In</Link>
  </div>
  )

};

export default signupPage 