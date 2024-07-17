import React , {useState} from 'react';
function TodoList(){

    const [tasks , setTasks] = useState([]);
    const [newTask , setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        ///...t(spread out function) is used to represent and retain the previous tasks
        if(newTask.trim() !== ""){
            setTasks(t=>[...t , newTask]);
            setNewTask("");
        }
    }

    function removeTask(index){
        const updatedTasks = tasks.filter((task , i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskup(index){
        if(index > 0){
            //swapping two tasks
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index - 1];
            updatedTasks[index - 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    }

    function moveTaskdown(index){
        if(index < tasks.length - 1){
            //swapping two tasks
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index + 1];
            updatedTasks[index + 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    }

    //clear all 
    //clear completed

    return(
        <div className='todo-container'>
            <h1 id = "heading">TO DO LIST</h1>
            <div className='todo-input'>
                <input id='input'
                type="text" placeholder='Add new task..' value={newTask}
                onChange={handleInputChange}>
                </input>
                <button className='add-button'
                onClick={addTask}>add</button>
            </div>

            <ol>
                {tasks.map((task , index) => 
                    <li key={index}>
                        <span className = 'text'>{task}</span>
                        
                        <button className='delete-button'
                        onClick={() => removeTask(index)}>
                            delete
                        </button>

                        <button className='move-button'
                        onClick={() => moveTaskup(index)}>
                            up
                        </button>

                        <button className='move-button'
                        onClick={() => moveTaskdown(index)}>
                            down
                        </button>

                    </li>
                )}
            </ol>
        </div>
    );
}

export default TodoList