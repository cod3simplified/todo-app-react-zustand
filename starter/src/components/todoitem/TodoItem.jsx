import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

function TodoItem({ title, description, complete }) {
  const [showBody, setShowBody] = useState(false);
  return (
    <li className={`todo ${complete === true ? "todo-complete" : ""}`}>
      <header className="todo-header">
        <p className="todo-title">{title}</p>
        <button onClick={() => setShowBody(!showBody)} className="expand-btn">
          {showBody === false ? <FaPlus /> : <FaMinus />}
        </button>
      </header>
      {showBody && (
        <div className="todo-body">
          <p className="todo-body-text">{description}</p>
          <div className="todo-actions">
            <button>
              {complete ? "mark as incomplete" : "mark as complete"}
            </button>
            <button>delete</button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
