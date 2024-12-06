import React from "react";

function TodoInput() {
  return (
    <div className="todo-input">
      <div className="todos-count">
        <p className="count">5</p>
        <p className="count-text">todos left</p>
      </div>
      <form className="todo-input-form">
        <input
          type="text"
          placeholder="todo title"
          className="todo-title-input"
        />
        <textarea
          className="todo-description-input"
          placeholder="todo description"
        ></textarea>
        <button className="add-btn">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoInput;
