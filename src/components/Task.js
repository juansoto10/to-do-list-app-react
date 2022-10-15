import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, completed, completeTask, deleteTask }) {
  return (
    <div className={completed ? 'task completed' : 'task'}>
      <div 
        className='task__text'
        onClick={() => completeTask(id)}
      >
        {text}
      </div>
      <div 
        className='task__icon-cont'
        onClick={() => deleteTask(id)}
      >
        <AiOutlineCloseCircle className='task__icon'/>
      </div>
    </div>
  );
}

export default Task;
