import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../components/TodoHeader";
import { TodoCounterLoading } from "../components/TodoCounterLoading/TodoCounterLoading";
import { TodoSearchLoading } from "../components/TodoSearchLoading/TodoSearchLoading";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { EmptySearchResults } from "../components/EmptySearchResults/EmptySearchResults";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodosLoading } from "../components/TodosLoading/TodosLoading";
import { TodosError } from "../components/TodosError/TodosError";
import { EmptyTodos } from "../components/EmptyTodos/EmptyTodos";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { Modal } from "../components/Modal/Modal";
import { TodoForm } from "../components/TodoForm/TodoForm";
import "./App.css";

function App() {
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
    addTodo,
    sincronizedTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
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

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <EmptySearchResults searchText={searchText} />
        )}
        // render={(todo) => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <ChangeAlert sincronize={sincronizedTodos} />
    </>
  );
}

export { App };
