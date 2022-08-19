import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [task, setTask] = useState("");

  const changeHandler = (event) => {
    setTask(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (task.length !== 0) {
      props.onAdd(task);
    }
    setTask("");
  };

  return (
    <form onSubmit={formSubmitHandler} className="form">
      <h1>Todo List</h1>
      <div className="block">
        <input
          type="text"
          name="input"
          onChange={changeHandler}
          value={task}
          className="textbox"
        />
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default Form;
