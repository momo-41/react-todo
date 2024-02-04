import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  // todoとして受け取って
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
