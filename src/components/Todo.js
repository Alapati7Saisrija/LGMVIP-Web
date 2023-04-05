import React,{useState} from 'react';
import TodoForm from './TodoForm';
import {CgClose} from 'react-icons/cg';


function Todo({todos,completeTodo,removeTodo}) {
  return todos.map((todo,index)=>(
    <div
        className={todo.isComplete? 'todo-row-complete':'todo-row'}
        key={index}
    >
        <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className="icons">
            <CgClose
            onClick={()=>removeTodo(todo.id)}
            className='delete-icon'/>

            
        </div>
    </div>
  ))
}

export default Todo;