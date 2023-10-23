import React, { useState } from 'react';

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        //console.log(value);
        //add the prop and pass the value
        addTodo(value)

        // after submitting the form
        setValue("")
    }
    return(
        <div>
            <form className="TodoForm" onSubmit={handleSubmit}>
                <input type="text" className='todo-input'
                placeholder='what is the task today?'
                value={value}
                onChange = {(e) => setValue(e.target.value)}>
                </input>
                <button type='submit' className='todo-button'> Add task
                </button>
            </form>
        </div>
    )
}
