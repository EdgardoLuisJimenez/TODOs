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

function AppUI() {
  return (
    <>
      <TodoContext.Consumer>
        {({ loading, error, searchedTodos, completeTodo, deleteTodo }) => (
          <>
            {loading && <TodoCounterLoading />}
            {!loading && <TodoCounter />}
            {loading && <TodoSearchLoading />}
            {!loading && <TodoSearch />}

            <TodoList>
              {loading && (
                <>
                  <TodosLoading />
                  <TodosLoading />
                  <TodosLoading />
                </>
              )}
              {error && <TodosError />}
              {!loading && searchedTodos.length <= 1 && <EmptyTodos />}

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

            <CreateTodoButton />
          </>
        )}
      </TodoContext.Consumer>
    </>
  );
}

export { AppUI };
