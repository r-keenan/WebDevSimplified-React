import React, { useState } from "react";

import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);
  return (
    <>
      <ToDoList todos={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
