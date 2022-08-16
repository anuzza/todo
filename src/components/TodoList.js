import React from "react";
import Todo from "./Todo.js";

const TodoList = ({ todos, ...rest }) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>
          <Todo index={i} todo={todo} {...rest} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
