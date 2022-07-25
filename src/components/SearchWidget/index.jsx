import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
export default function index(props) {
  const inputEl = useRef(null);
  function changeWidth(e) {
    if (!inputEl.current.classList.contains("input-active")) {
      inputEl.current.classList.add("input-active");
    } else {
      inputEl.current.classList.remove("input-active");
    }
  }
  return (
    <div
      style={{ backgroundColor: props.bgc }}
      className="search-widget flex justify-center items-center"
    >
      <input
        ref={inputEl}
        type="text "
        placeholder="Search"
        className="box-border"
      />
      <div onClick={changeWidth} className="cursor-pointer">
        <div
          className=" i-carbon-search text-3xl"
          style={{ color: props.bgc }}
        ></div>
      </div>
    </div>
  );
}
