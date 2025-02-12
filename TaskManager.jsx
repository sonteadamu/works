import React, { useState, useRef } from "react";  
import Sidebar from "./sidebar";  

const TaskManager = ({ tasks, setTasks, handleToggleComplete, handleDeleteTask, name, setProfilePhoto, profilePhoto, handleLogout }) => {  
  const [taskTitle, setTaskTitle] = useState("");  
  const [taskDescription, setTaskDescription] = useState("");  
  const [editingIndex, setEditingIndex] = useState(null);  
  const [filteredTasks, setFilteredTasks] = useState(tasks);  
  const [showAddTask, setShowAddTask] = useState(false);  
  const fileInputRef = useRef(null); // Create a ref for the file input  

  const handleAddTask = () => {  
    if (!taskTitle.trim()) return;  

    if (editingIndex !== null) {  
      const updatedTasks = tasks.map((task, index) =>  
        index === editingIndex ? { ...task, title: taskTitle, description: taskDescription } : task  
      );  
      setTasks(updatedTasks);  
      setFilteredTasks(updatedTasks);  
      setEditingIndex(null);  
    } else {  
      const newTask = { title: taskTitle, description: taskDescription, completed: false };  
      const updatedTasks = [...tasks, newTask];  
      setTasks(updatedTasks);  
      setFilteredTasks(updatedTasks);  
    }  

    setTaskTitle("");  
    setTaskDescription("");  
    setShowAddTask(false); // Hide the input fields after adding  
  };  

  const handleEditTask = (index) => {  
    const taskToEdit = tasks[index]; 
    setTaskTitle(taskToEdit.title);  
    setTaskDescription(taskToEdit.description);  
    setEditingIndex(index);  
    setShowAddTask(true); // Show the input fields for editing  
  };   
  
  const filterTasks = (status) => {  
    if (status === "completed") {  
      setFilteredTasks(tasks.filter(task => task.completed));  
    } else if (status === "incomplete") {  
      setFilteredTasks(tasks.filter(task => !task.completed));  
    } else {  
      setFilteredTasks(tasks);  
    }  
  };  

  const handleFileChange = (event) => {  
    const file = event.target.files[0];  
    if (file) {  
      const reader = new FileReader();  
      reader.onloadend = () => {  
        setProfilePhoto(reader.result); // Set the profile photo to the base64 string  
      };  
      reader.readAsDataURL(file); // Convert the file to base64  
    }  
  };  

  const triggerFileInput = () => {  
    if (fileInputRef.current) {  
      fileInputRef.current.click(); // Trigger the file input click  
    }  
  };  

  return (  
    <div className="row">  
      <div className="col-md-3 col-12">  
      <Sidebar   
  name={name}   
  setProfilePhoto={setProfilePhoto}  
  profilePhoto={profilePhoto}   
  handleLogout={handleLogout}   
  showAddTask={showAddTask}   
  setShowAddTask={setShowAddTask}   
  filterTasks={filterTasks}   
  triggerFileInput={triggerFileInput} // Pass the function here  
/>
        <div className="mt-3 text-center">  
           <input   
            type="file"   
            className="form-control d-none" // Hide the file input  
            ref={fileInputRef} // Use the ref to reference the file input  
            onChange={handleFileChange}   
          />  
           <button className="btn btn-primary mt-2" onClick={triggerFileInput}>  
            Add Photo  
          </button>  
        
          </div>  
      </div>  
      <div className="col-md-9">  
        <h2>Tasks Overview</h2>  
        {showAddTask && (  
          <div className="input-group mb-3" style={{ width: '400px' }}>   
            <input   
              type="text"  
              className="form-control"  
              value={taskTitle}  
              onChange={(e) => setTaskTitle(e.target.value)}  
              placeholder="Task Title"  
            />  
            <input  
              type="text"  
              className="form-control"  
              value={taskDescription}  
              onChange={(e) => setTaskDescription(e.target.value)}  
              placeholder="Task Description"  
            />  
            <button className="btn btn-primary" onClick={handleAddTask}>  
              {editingIndex !== null ? "Update" : "Add"}  
            </button>  
          </div>  
        )}  
        <h6>Your Tasks</h6>  
        <div className="row">  
          {filteredTasks.map((task, index) => (  
            <div key={index} className="col-md-4 mb-3">  
              <div className={`card ${task.completed ? 'bg-success text-white' : 'bg-danger text-white'}`}>  
                <div className="card-body">  
                  <h5 className="card-title">{task.title}</h5>  
                  <p className="card-text">{task.description}</p>  
                  <button className="btn btn-light" onClick={() => handleToggleComplete(index)}>  
                    {task.completed ? "❕" : "✅"}  
                  </button>  
                  <button className="btn btn-warning ms-2" onClick={() => handleEditTask(index)}>✏️</button>  
                  <button className="btn btn-danger ms-2" onClick={() => handleDeleteTask(index)}>🗑</button>  
                </div>  
              </div>  
            </div>  
          ))}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default TaskManager;