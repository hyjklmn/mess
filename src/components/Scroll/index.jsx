import React, { useEffect, useRef } from "react";
import "./index.scss";
export default function index() {
  const scrollRef = useRef([]);
  const boxRef = useRef(null);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function scroll(e) {
    const triggerBottom = (window.innerHeight / 5) * 4;
    scrollRef.current.forEach((item) => {
      if (item) {
        const boxTop = item.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          item.classList.add("scroll-active");
        } else {
          item.classList.remove("scroll-active");
        }
      }
    });
  }
  function changeAngle(e) {
    if (e.target.classList.contains("roate")) {
      e.target.classList.remove("roate");
    } else {
      e.target.classList.add("roate");
    }
  }

  useEffect(() => {
    scroll();
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  });
  return (
    <div
      ref={boxRef}
      className="scroll-animate flex flex-col justify-center items-center"
    >
      {arr.map((item) => {
        return (
          <div
            ref={(r) => scrollRef.current.push(r)}
            key={item}
            className="w-100"
            onClick={changeAngle}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
