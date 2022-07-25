import React, { Component } from "react";
import "./index.scss";

export default class Exercise extends Component {
  state = {
    arr: [1, 2, 3, 4, 5],
  };
  onClick = (e) => {
    const { target } = e;
    let parent = target.parentNode;
    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].classList.contains("active")) {
        parent.children[i].classList.remove("active");
      }
    }
    target.classList.add("active");
  };
  render() {
    return (
      <div className="exercise-component" onClick={this.onClick}>
        {this.state.arr.map((item) => {
          return (
            <div
              key={item}
              className={item === 1 ? "active" : ""}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
              }}
            >
              <p>{this.props.propsTest}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
