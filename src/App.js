import React, { useState, useRef } from "react";

import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddToDo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    console.log(name);
  }
  return (
    <>
      <ToDoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddToDo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
