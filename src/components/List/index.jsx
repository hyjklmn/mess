import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import Item from "../Item";
export default class List extends Component {
  static propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    changeCheck: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  };
  render() {
    const { todos, deleteTodo, changeCheck } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              changeCheck={changeCheck}
            />
          );
        })}
      </ul>
    );
  }
}
