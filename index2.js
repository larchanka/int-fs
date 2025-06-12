import React, { useState, useEffect, useMemo } from 'react';

const TodoList = ({ todos, onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const completedTodos = useMemo(() => {
    return todos.filter(todo => todo.completed === true);
  }, [newTodo]);

  useEffect(() => {
    setFilteredTodos(todos.filter(todo => todo.completed));
  }, []);

  const handleAdd = () => {
    if(newTodo.length > 0) {
      onAddTodo(newTodo);
    }
    setNewTodo('');
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input value={newTodo} onChange={handleInputChange} placeholder="New Todo" />
      <button onClick={handleAdd}>Add Todo</button>

      <h2>Completed Todos</h2>
      <ul>
        {completedTodos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <h2>All Completed (from state)</h2>
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>{todo.title}</li>
        ))}
      </ul>

      <h2>All Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title.toUpperCase()}</li>
        ))}
      </ul>

      <button onClick={() => console.log('Total Todos:', todos.length)}>
        Log Count
      </button>
    </div>
  );
};

export default TodoList;
