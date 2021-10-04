import React, { useState, useRef, useEffect } from "react";
import { TodoItem } from "./components/TodoItem";
import { ITodo } from "./Interfaces";

type FormElement = React.FormEvent<HTMLFormElement>;
const KEY = "todosApp.todos";

function App(): JSX.Element {

  // Load todos from local storage
  useEffect(() => {
    const todos: ITodo[] = JSON.parse(localStorage.getItem(KEY) || '[]');
    setTodos(todos);
  }, []);

  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const taskInput = useRef<HTMLInputElement>(null);

  // Save todos to local storage
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault(); // prevents the page from refreshing
    if (newTodo.trim() === "") {
      return (taskInput.current!.placeholder = "Please enter a task");
    }
    addTodo(newTodo);
    setNewTodo("");
    taskInput.current?.focus();
  };

  const addTodo = (name: string): void => {
    const newTodos: ITodo[] = [...todos, { name, completed: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {/* Form */}
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => setNewTodo(e.target.value)}
                  value={newTodo}
                  className="form-control"
                  ref={taskInput}
                  autoFocus
                  placeholder="Add Todo..."
                />
                <div className="d-grid mt-2">
                  <button className="btn btn-light" type="submit">
                    Add task
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Todo Items*/}
          {todos.map((todo: ITodo, key: number) => (
            <TodoItem
              key={key}
              todo={todo}
              index={key}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
