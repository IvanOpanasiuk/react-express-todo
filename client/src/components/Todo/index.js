import React, { Component } from "react";
import { TodosConsumer } from "../../context/CtxtTodosList";
import './style.css'
class Todo extends Component {
  render() {
    const { el } = this.props;
    return (
      <TodosConsumer>
        {({ handleDeleteTodo, handleToggleDone }) => (
          <div
            style={{ textDecoration: el.done ? "line-through" : "" }}
            className="todo-main"
          >
            <span>{el.text}</span>
            <button
              className="todo__button-delete"
              onClick={() => handleDeleteTodo(el._id)}
            >
              X
            </button>
            <button
              onClick={() => handleToggleDone(el._id)}
              className="todo__button-done"
            >
              {el.done ? "to do" : "done"}
            </button>
          </div>
        )}
      </TodosConsumer>
    );
  }
}

export default Todo;
