import React, { useState } from 'react';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        //console.log(value);
        //add the prop and pass the value
        editTodo(value, task.id)

        // after submitting the form
        setValue("")
    }
    return(
        <div>
            <form className="TodoForm" onSubmit={handleSubmit}>
                <input type="text" className='todo-input'
                placeholder='update the task'
                value={value}
                onChange = {(e) => setValue(e.target.value)}>
                </input>
                <button type='submit' className='todo-button'> Update task
                </button>
            </form>
        </div>
    )
}
