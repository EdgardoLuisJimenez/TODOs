import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../TodoContext/TodoContext";

function TodoCounter() {
  const {
    completedTodos : completed,
    totalTodos: total,
  } = React.useContext(TodoContext);

  return total == completed ? (
    <h1 className="TodoCounter">Enhorabuena!!, Completaste todas las tareas</h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
