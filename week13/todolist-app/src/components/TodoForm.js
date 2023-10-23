// consists of the main form
import React, { useState } from 'react';

export const TodoForm = () => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        console.log(value);
        setValue("");
    }
    return(
        <div>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <input type="text"
                className="todo-input"
                placeholder='task to do'
                onChange = {(e) => setValue(e.target.value)}
                value={value}></input>
                <button type="submit"
                className="todo-button"
                >Add Task</button>
            </form>
        </div>        
    )
}