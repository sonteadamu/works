import React from "react";  

const Sidebar = ({   
  name,   
  profilePhoto,   
  setProfilePhoto,   
  handleLogout,   
  showAddTask,   
  setShowAddTask,   
  filterTasks   
}) => {  
  return (  
    <div className="sidebar d-flex flex-column p-3 border-end" style={{ width: '250px' }}>  
      <h1>welcome</h1>  
      <img src={profilePhoto} alt="Profile" className="img-fluid rounded-circle mb-3" style={{ width: '100px', height: '100px' }} />  
      <h5>{name}</h5>  

      <h6 className="mt-4">Filter Tasks</h6>  
      <button className="btn btn-outline-primary mb-2" onClick={() => filterTasks("all")}>All Tasks</button>  
      <button className="btn btn-outline-success mb-2" onClick={() => filterTasks("completed")}>Completed Tasks</button>  
      <button className="btn btn-outline-danger mb-2" onClick={() => filterTasks("incomplete")}>Incomplete Tasks</button>  
      
      <h6 className="mt-4">Manage Tasks</h6>  
      <button className="btn btn-outline-info mb-2" onClick={() => setShowAddTask(prev => !prev)}>  
        {showAddTask ? "Hide Add Task" : "Add Task"}  
      </button>  
      
      <footer className="mt-auto">  
        <button className="btn btn-danger w-100" onClick={handleLogout}>Logout</button>  
      </footer>  
    </div>  
  );   
};  

export default Sidebar;