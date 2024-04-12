import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todo/todoSlice';
import './list.css';

function List() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="row" id="todo-container">
        <ol className="todo-list">
        {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className={todo.completed ? 'completed' : ''}>
            {todo.text}
          </span>
          <button className="delete-btn" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}

        </ol>
    </div>
  )
}

export default List
  

      
  