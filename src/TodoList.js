import React from "react";
import Todo from "./Todo";

const TodoList = ({ t, toggleTodo }) => {
  return t.map((todo) => (
    <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
};

export default TodoList;
