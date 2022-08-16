import React, { useState } from "react";
// import "./Form.css";

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
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="input">Add Task</label>
      <input type="text" name="input" onChange={changeHandler} value={task} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
