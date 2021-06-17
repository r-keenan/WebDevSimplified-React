import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <ToDoList />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
