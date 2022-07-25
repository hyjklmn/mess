import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
export default function index() {
  const [percent, setPercent] = useState(0);
  const blur = useRef(null);
  const blur2 = useRef(null);
  function blurLoading() {
    if (percent < 100) {
      setPercent(percent + 1);
      blur.current.style.filter = `blur( ${90 - percent}px)`;
      blur2.current.style.opacity = ` ${(100 - percent) / 100}`;
    } else {
      return;
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      blurLoading();
    }, 10);
    return () => clearInterval(interval);
  }, [percent]);
  return (
    <div className="text-center loading" onClick={blurLoading}>
      <div ref={blur}></div>
      {percent === 100 ? null : <p ref={blur2}>{percent}%</p>}
    </div>
  );
}
