import React, { useState } from "react";
import "./index.scss";
export default function index() {
  const [times, setTimes] = useState(0);
  function doubleClick(e) {
    const target = e.target;
    const native = e.nativeEvent;
    const { offsetX: x, offsetY: y } = native;
    clearHeart(target);
    heart(x, y, target);
    setTimes(times + 1);
  }
  function heart(x, y, target) {
    const emoji = ["💘", "💝", "💖", "💗", "💓", "❤️‍🔥"];
    const random = Math.floor(Math.random() * emoji.length);
    const span = document.createElement("span");
    span.innerHTML = emoji[random];
    span.style.position = "absolute";
    span.style.left = x + "px";
    span.style.top = y + "px";
    target.appendChild(span);
    setTimeout(() => {
      clearHeart(target);
    }, 800);
  }
  function clearHeart(target) {
    target.innerHTML = "";
  }
  return (
    <div className="double-click flex justify-center items-center text-center">
      <div>
        <h3>
          HEART BEAT TIMES <span className="times">{times}</span>
        </h3>
        <div className="loveMe" onDoubleClick={doubleClick}></div>
      </div>
    </div>
  );
}
