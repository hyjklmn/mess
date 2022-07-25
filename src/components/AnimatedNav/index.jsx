import React, { useRef } from "react";
import "./index.scss";
export default function index() {
  const fa = useRef(null);
  function handleScroll(e) {
    const target = e.currentTarget;
    const children = target.children;
    if (fa.current.classList.contains("shousuo")) {
      fa.current.classList.remove("shousuo");
    } else {
      fa.current.classList.add("shousuo");
    }
    if (target.classList.contains("scroll")) {
      target.classList.remove("scroll");
    } else {
      target.classList.add("scroll");
    }

    if (children[0].classList.contains("line-1-active")) {
      children[0].classList.remove("line-1-active");
    } else {
      children[0].classList.add("line-1-active");
    }
    if (children[1].classList.contains("line-2-active")) {
      children[1].classList.remove("line-2-active");
    } else {
      children[1].classList.add("line-2-active");
    }
  }
  return (
    <div className="animated-nav flex justify-center items-center">
      <div ref={fa} className="w-100 h-25 p-5 box-border ">
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
        <button className="line-box is-scroll" onClick={handleScroll}>
          <div className="line line-1 "></div>
          <div className="line line-2"></div>
        </button>
      </div>
    </div>
  );
}
