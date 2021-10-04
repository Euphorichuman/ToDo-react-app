import React from "react";
import { ITodo } from "../Interfaces";

interface ITodoItemProps {
  todo: ITodo;
  index: number;
  completeTodo(index: number): void;
  removeTodo(index: number): void;
}

export class TodoItem extends React.Component<ITodoItemProps> {
  render() {
    const { todo, index, completeTodo, removeTodo } = this.props;
    return (
      <div className="alert alert-dismissible alert-secondary mt-2" key={index}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked= {todo.completed}
            onClick={() => completeTodo(index)}
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckDefault"
            style={{
              textDecoration: todo.completed ? "line-through" : ""
            }}
          >
            {todo.name}
          </label>
        </div>
        <button
          type="button"
          className="btn-close"
          onClick={() => removeTodo(this.props.index)}
        ></button>
      </div>
    );
  }
}
