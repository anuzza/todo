import { useState } from "react";
import Card from "./components/containers/Card";
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
    <Card>
      <Form onAdd={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </Card>
  );
}

export default App;
