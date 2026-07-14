import React from 'react'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <div>
      
        <Link to="/signup">Sign Up</Link>
        <Link to="/adding">Adding</Link>
        <Link to="/signin">Sign In</Link>
    </div>
  )
}

export default navbar
