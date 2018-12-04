import React, { Component } from "react";
import { TodosConsumer } from "../../context/CtxtTodosList";
import Todo from "../Todo";
import './style.css';

export default class TodosList extends Component {
  render() {
    return (
      <div className="todolist-main">
        <TodosConsumer>
          {({state}) =>{
            const {todos} = state;
            if(todos) {
              return (todos.map(el => <Todo key={el._id} el={el} />))
            } else {
              return <div>Loading ...</div>
            }
            
          }}
        </TodosConsumer>
      </div>
    );
  }
}
