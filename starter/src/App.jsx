import "./App.css";
import TodoInput from "./components/todo-input/TodoInput";
import Todos from "./components/todos/Todos";

function App() {
  return (
    <div>
      <TodoInput />
      <Todos />
    </div>
  );
}

export default App;
