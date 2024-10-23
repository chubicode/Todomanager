import { useEffect, useRef, useState } from 'react';
import './CSS/Todo.css';
import TodoItems from './TodoItems';

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  // Function to load todos from localStorage
  const loadTodos = async () => {
    const savedTodos = await JSON.parse(localStorage.getItem("todos")) || [];
    const savedCount = await localStorage.getItem("todos_count") || 0;
    setTodos(savedTodos);
    count = savedCount;
  };

  // Function to save todos to localStorage
  const saveTodos = async (todos) => {
    await localStorage.setItem("todos", JSON.stringify(todos));
    await localStorage.setItem("todos_count", count);
  };

  // Add new todo item
  const add = async () => {
    const newTodo = {
      no: count++,
      text: inputRef.current.value,
      display: ""
    };

    // Handle form data
    if (inputRef.current.value.trim()) {
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      inputRef.current.value = "";

      // Save updated todos to localStorage asynchronously
      await saveTodos(updatedTodos);
    }
  };

  // Load todos when component mounts
  useEffect(() => {
    loadTodos();
  }, []);

  // Update localStorage whenever todos array changes
  useEffect(() => {
    const updateStorage = async () => {
      if (todos.length) {
        await saveTodos(todos);
      }
    };

    updateStorage();
  }, [todos]);

  return (
    <div className='Todo'>
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Add your task' className='todo-input' />
        <div onClick={add} className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => (
          <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
