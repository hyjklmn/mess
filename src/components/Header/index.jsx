import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import "./index.css";

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === "") return;
    let todoObj = {
      id: nanoid(),
      things: target.value,
      done: false,
    };
    this.props.addTodo(todoObj);
    target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text "
          placeholder="输入任务按回车完成"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
