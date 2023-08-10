import React from "react";
import "./TodoCounter.css";

/*
    completedTodos : completed,
    totalTodos: total,
*/

function TodoCounter({ completed, total }) {
  return total == completed ? (
    <h1 className="TodoCounter">Enhorabuena!!, Completaste todas las tareas</h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
