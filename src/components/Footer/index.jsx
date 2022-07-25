import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {
  handlAllChecked = (checked) => {
    this.props.allChecked(checked);
  };
  clearAll = () => {
    this.props.clearAllTodo();
  };
  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((pre, cur) => {
      return pre + (cur.done ? 1 : 0);
    }, 0);
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === todos.length && todos.length !== 0}
            onChange={(event) => {
              this.handlAllChecked(event.target.checked);
            }}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.clearAll}>
          删除全部完成事件
        </button>
      </div>
    );
  }
}
