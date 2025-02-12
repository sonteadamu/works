import React from "react";  

const Signup = ({ name, setName, email, setEmail, password, setPassword, handleSignup, setShowLogin }) => {  
  return (  
    <div>  
      <h2>Sign Up</h2>  
      <input  
        type="text"  
        className="form-control mb-3"  
        placeholder="Name"  
        value={name}  
        onChange={(e) => setName(e.target.value)}  
      />  
      <input  
        type="text"  
        className="form-control mb-3"  
        placeholder="Email"  
        value={email}  
        onChange={(e) => setEmail(e.target.value)}  
      />  
      <input  
        type="password"  
        className="form-control mb-3"  
        placeholder="Password"  
        value={password}  
        onChange={(e) => setPassword(e.target.value)}  
      />  
      <button className="btn btn-primary" onClick={handleSignup}>Sign Up</button>  
      <button className="btn btn-link" onClick={() => setShowLogin(true)}>Login</button>  
    </div>  
  );  
};  

export default Signup;