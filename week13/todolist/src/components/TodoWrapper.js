import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import {v4 as uuidv4} from 'uuid';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        // makes a copy of current state using spread
        setTodos([...todos, {id: uuidv4(), task:todo,
        completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = (id) => {
        //setting Todos and in that, take todos and
        //pick where the id matches
        // and if it equals the id we pass
        // then take the copy of that todo 
        // and update the completed value
        setTodos(
            todos.map((todo) => 
            todo.id === id ? {
                ...todo, completed: !todo.completed} :
            todo
        ));
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(
            todo => todo.id !== id
        ))
    }

    const editTodo = (id) => {
        // if the todo id is equal to the id we passed
        // then we make a copy of todo and 
        // so it should be opposite whatever the current editing value is
        // and display the edit form
        // otherwise return just todo value
      setTodos(todos.map (todo =>
        todo.id === id ? 
        {...todo, isEditing: !todo.isEditing}
        : todo))  
    }

    const editTask = (task,id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? 
            {...todo, task, isEditing: !todo.isEditing} :
            todo))
    }
    return(
        <div className = "TodoWrapper">
            <h1>Get Things Done</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} 
                    task={todo}/>
                ) : (
                <Todo task={todo} key={index}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}/>)
            ))}
        </div>
    )
} 