import React, { useRef } from "react";
import "./index.scss";
export default function index() {
  const elabel = useRef();
  const plabel = useRef();
  function foucus(e, type) {
    let current = null;
    if (type === "email") {
      current = elabel.current;
    }
    if (type === "pwd") {
      current = plabel.current;
    }
    if (e.target.value !== "") return;

    for (let i = 0; i < current.children.length; i++) {
      current.children[i].style.transitionDelay = `${i * 50}ms`;
      current.children[i].classList.add("span-active");
    }
  }
  function blur(e, type) {
    let current = null;

    if (type === "email") {
      current = elabel.current;
    }
    if (type === "pwd") {
      current = plabel.current;
    }
    if (e.target.value !== "") return;
    for (let i = 0; i < current.children.length; i++) {
      current.children[i].classList.remove("span-active");
    }
  }
  return (
    <div className="login box-border">
      <div className="w-100 h-120 ma rounded p-1 box-border">
        <p className="text-center text-3xl font-bold">Please Login</p>
        <div className="item">
          <input
            type="text"
            onFocus={(e) => foucus(e, "email")}
            onBlur={(e) => blur(e, "email")}
          />
          <label ref={elabel}>
            <span>E</span>
            <span>M</span>
            <span>A</span>
            <span>I</span>
            <span>L</span>
          </label>
        </div>
        <div className="item">
          <input
            type="text"
            onFocus={(e) => foucus(e, "pwd")}
            onBlur={(e) => blur(e, "pwd")}
          />
          <label ref={plabel}>
            <span>P</span>
            <span>a</span>
            <span>s</span>
            <span>s</span>
            <span>w</span>
            <span>o</span>
            <span>r</span>
            <span>d</span>
          </label>
        </div>
        <div className="login-btn text-center mt-20">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
