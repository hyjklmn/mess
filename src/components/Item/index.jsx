import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = { mouse: false };
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  delItem = (id) => {
    // 高阶函数
    return () => {
      if (window.confirm("确定删除吗?")) {
        this.props.deleteTodo(id);
      }
    };
  };
  handleChange = (id) => {
    return (event) => {
      this.props.changeCheck(id, event.target.checked);
    };
  };
  render() {
    const { id, things, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleChange(id)}
          />
          <span>{things}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={this.delItem(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
