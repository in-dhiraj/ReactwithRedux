import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function Search() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div class="row justify-content-between text-white p-2">
      <div class="form-group flex-fill mb-2">
        <input id="todo-input" type="text" class="form-control" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        class="btn btn-primary mb-2 ml-2"
      >
        Add todo
      </button>
    </div>
  );
}

export default Search;
