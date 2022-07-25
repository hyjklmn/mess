import React from "react";
import "./index.scss";
export default function index() {
  function next(e) {}
  return (
    <div className="vertical">
      <div className="left">
        <div className="scroll-img">12321</div>
        <div className="scroll-img">3454353</div>
        <div className="scroll-img">567657567566786</div>
        {/*  */}
        <div className="icon" onClick={next}>
          <div className="i-carbon-arrow-shift-down"></div>
        </div>
      </div>
      <div className="right">
        <div className="icon">
          <div className="i-carbon-mac-shift"></div>
        </div>
      </div>
    </div>
  );
}
