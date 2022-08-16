import React, { useState } from "react";

const Todo = ({ index, todo, deleteTodo, updateTodo }) => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const changeHandler = (event) => {
    setNewTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (newTodo.length !== 0) {
      updateTodo(newTodo, index);
    }
    setBtnClicked(false);
  };

  return (
    <div>
      <div>{todo}</div>
      <div>
        <button onClick={() => deleteTodo(index)}>Delete</button>

        <button
          onClick={() => {
            setBtnClicked(true);
          }}
        >
          Update
        </button>

        {btnClicked && (
          <form onSubmit={submitHandler}>
            <input type="text" onChange={changeHandler} defaultValue={todo} />
            <button type="submit">Done</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Todo;
