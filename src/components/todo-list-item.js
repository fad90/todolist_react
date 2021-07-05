import React from "react";
import "./todo-list-item.css";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "blue",
  };

  return (
    <span className="todo-list-item">
      <span style={style}>{label}</span>
      <button type="button"></button>
      <button type="button"></button>
    </span>
  );
};

export default TodoListItem;
