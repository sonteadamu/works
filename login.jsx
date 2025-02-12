import React from "react";  

const Login = ({ name,setName,email, setEmail, password, setPassword, handleLogin, setShowLogin }) => {  
  return (  
    <div>  
      <h2>Login</h2>  
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
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>  
      <button className="btn btn-link" onClick={() => setShowLogin(false)}>Sign Up</button>  
      <button className="btn btn-link" onClick={() => alert("Password reset link sent to your email.")}>Forgot Password?</button>  
    </div>  
  );  
};  

export default Login;