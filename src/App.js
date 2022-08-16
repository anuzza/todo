import { useState } from "react";
import "./App.css";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const deleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  const updateTodo = (newTodo, index) => {
    setTodos((prev) => {
      const newTodos = [...prev];
      newTodos[index] = newTodo;
      return newTodos;
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Form onAdd={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
