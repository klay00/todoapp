import React, { useState } from "react";

function ToDoApp() {

    const [task, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handelInputChage = (event) => {
        setInputValue(event.target.value);
    };

    const handelsubmit = (event) => {
        event.preventDefault();
        if (inputValue !== '') {
            setTasks([...task, inputValue]);
            setInputValue('')
            console.log(task);
        }else{
            alert('Please inter some tasked')
        }
    }
    const DeleteTask = (index) => {
        const newTasks = [...task];
        newTasks.splice(index, 1);
        console.log(task.index);
        setTasks(newTasks);
    }
    const EditTsk = (index, newTask) => {
        const newTasks = [...task];
        newTasks[index] = newTask;
        setTasks(newTasks);
    }

    return (


        <div className="ToDoApp">
            <h1>To Do App List</h1>
            <form onSubmit={handelsubmit} >
                <input onChange={handelInputChage} type="text" name="" id="" placeholder="add your task" />
                <button className="add-btn" type="submit">Add task</button>
            </form>
            <ul>{
                task.map((task, index) => {
                    return <li key={index}><span>{task}</span>
                        <div className="buts">
                        <button onClick={() => { DeleteTask(index)}}>Delete</button>
                           
                        
                        <button onClick={() => {  EditTsk(index, prompt("Edit task :", task))}}>edit task</button>
                                                  
                        </div>
                        
                    </li>
                })
            }</ul>

        </div>
    );

}
export default ToDoApp;
