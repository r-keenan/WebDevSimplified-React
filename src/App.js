import React, { useState } from "react";

import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo 1", complete: false },
  ]);
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
