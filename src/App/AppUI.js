import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodosLoading } from "../components/TodosLoading/TodosLoading";
import { TodosError } from "../components/TodosError/TodosError";
import { EmptyTodos } from "../components/EmptyTodos/EmptyTodos";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoCounterLoading } from "../components/TodoCounterLoading/TodoCounterLoading";
import { TodoSearchLoading } from "../components/TodoSearchLoading/TodoSearchLoading";
import { TodoContext } from "../TodoContext/TodoContext";
import React from "react";
import { Modal } from "../components/Modal/Modal";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { TodoHeader } from "../components/TodoHeader";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoHeader>
        {loading ? (
          <>
            <TodoCounterLoading />
            <TodoSearchLoading />
          </>
        ) : (
          <>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </>
        )}
      </TodoHeader>

      <TodoList>
        {loading ? (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        ) : (
          <>
            {error && <TodosError />}
            {searchedTodos.length < 1 && <EmptyTodos />}
          </>
        )}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };