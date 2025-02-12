import React, { useState } from "react";  
import Login from "./login";  
import Signup from "./signup";  
import TaskManager from "./TaskManager";  
import "bootstrap/dist/css/bootstrap.min.css";  

const App = () => {  
  const [tasks, setTasks] = useState([]);  
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const [showLogin, setShowLogin] = useState(true);  
  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [profilePhoto, setProfilePhoto] = useState("");  

  const handleLogin = () => {  
    setIsLoggedIn(true);  
  };  

  const handleLogout = () => {  
    setIsLoggedIn(false);  
    setTasks([]);  
    setName("");  
    setEmail("");  
    setPassword("");  
    setProfilePhoto("");  
  };  

  const handleSignup = () => {  
    setIsLoggedIn(true);  
    setShowLogin(false);  
  };  

  const handleToggleComplete = (index) => {  
    const updatedTasks = tasks.map((task, i) =>  
      i === index ? { ...task, completed: !task.completed } : task  
    );  
    setTasks(updatedTasks);  
  };  

  const handleDeleteTask = (index) => {  
    const updatedTasks = tasks.filter((_, i) => i !== index);  
    setTasks(updatedTasks);  
  };  

  return (  
    <div className="container-fluid mt-5">  
      {!isLoggedIn ? (  
        <div className="text-center">  
          {showLogin ? (  
            <Login name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} setShowLogin={setShowLogin} />  
          ) : (  
            <Signup name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSignup={handleSignup} setShowLogin={setShowLogin} />  
          )}  
        </div>  
      ) : (  
        <TaskManager   
          tasks={tasks}   
          setTasks={setTasks}   
          handleToggleComplete={handleToggleComplete}   
          handleDeleteTask={handleDeleteTask}   
          name={name}   
          profilePhoto={profilePhoto}   
          setProfilePhoto={setProfilePhoto}   
          handleLogout={handleLogout}   
        />  
      )}  
    </div>  
  );  
};  

export default App;