import React, { useState } from "react";
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input, 
      completed: false
    };

    props.onSubmit(newTask);
  };

  return (
    <form 
      className='form'
      onSubmit={handleSubmit}
    >
      <input 
        className='form__input'
        type='text'
        placeholder='Enter a task'
        name='text'
        onChange={handleChange}
      />
      <button className='form__button'>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;