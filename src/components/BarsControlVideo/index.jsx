import React, { useEffect, useRef } from "react";
import "./index.scss";
import video from "../../assets/test.mp4";
export default function index() {
  const videoRef = useRef(null);
  function videoTimeUpdate(params) {
    videoRef.current &&
      videoRef.current.addEventListener("timeupdate", (e) => {
        const { currentTime } = e.target;
        e.target.currentTime = scroll();
      });
  }
  window.addEventListener("scroll", scroll);
  function scroll() {
    if (document.documentElement.scrollTop > 0) {
      videoRef.current.play();
    }
    return document.documentElement.scrollTop / 10;
  }
  setTimeout(() => {
    videoTimeUpdate();
  }, 800);

  return (
    <div className="bars-control-video">
      <video src={video} muted ref={videoRef}></video>
    </div>
  );
}
