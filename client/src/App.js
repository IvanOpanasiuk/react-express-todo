import React, { Component } from "react";
import "./App.css";
import TodosList from "./components/TodosList";
import TodoForm from "./components/TodoForm";
import { TodosProvider } from "./context/CtxtTodosList";

class App extends Component {
  state = {
    todos: [],
    newtodo: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleSetTodo({ text: this.state.newtodo, done: false });
    this.setState({
      newtodo: ""
    });
  };

  handleToggleDone = id => {
    const isDone = !this.state.todos.filter(el => el._id === id)[0].done;
    this.handleUpdateText(id, isDone);
  };

  handleEditText = id => {
    fetch(`/api/updateTodo/${id}`)
      .then(res => res.json())
      .then(todos => this.setState({ todos: todos.data }));
  };

  handleSetTodo = todo => {
    fetch(`/api/setTodo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo)
    })
      .then(res => res.json())
      .then(todos => {
        this.setState({ todos: [todos.data, ...this.state.todos] });
      });
  };

  handleDeleteTodo = id => {
    fetch(`/api/deleteTodo`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id })
    })
      .then(res => res.json())
      .then(res => {
        let todos = this.state.todos.filter(el => el._id !== id);
        this.setState({ todos });
      });
  };

  handleUpdateText = (id, done) => {
    fetch(`/api/updateTodo`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, done })
    })
      .then(res => res.json())
      .then(todo => {
        let todos = this.state.todos.map(el => {
          if (el._id === todo.result._id) {
            el.done = !todo.result.done;
            return el;
          } else {
            return el;
          }
        });
        this.setState({ todos });
      });
  };

  handleGetAllTodos = () => {
    fetch("/api/getTodos")
      .then(res => res.json())
      .then(todos => {
        this.setState({ todos: todos.data });
      });
  };

  componentDidMount() {
    this.handleGetAllTodos();
  }

  render() {
    const state = this.state;
    return (
      <div>
        <TodosProvider
          value={{
            state,
            handleDeleteTodo: this.handleDeleteTodo,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            handleToggleDone: this.handleToggleDone
          }}
        >
          <TodoForm />
          <TodosList />
        </TodosProvider>
      </div>
    );
  }
}
export default App;
