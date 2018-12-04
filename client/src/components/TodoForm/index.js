import React, { Component } from 'react';
import { TodosConsumer } from "../../context/CtxtTodosList";
import './style.css'

export default class TodoForm extends Component {
    handelSubmit = e => {
        if (e && e.type === 'submit') {
          e.preventDefault();
        }
    }

    render() {
        return (
            
        <TodosConsumer>
          {({state, handleChange, handleSubmit}) =>{
              return (
                <form className="todo-form-main" onSubmit={handleSubmit}>
                <input
                name="newtodo"
                value={state.newtodo}
                onChange={handleChange}
                placeholder="new todo ... "
              />
              <button onClick={handleSubmit}>add todo</button>
                </form>
              )
          }}
        </TodosConsumer>
            
        );
    }
}