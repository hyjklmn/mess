import React, { useState } from "react";
import "./index.scss";
export default function index() {
  const imgs = [
    "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
    "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  ];
  const [imgIndex, changeIndex] = useState(0);
  function changeImg(e) {
    const direction = e.currentTarget.dataset.direction;
    if (direction === "right") {
      changeIndex(imgIndex + 1);
      if (imgIndex === imgs.length - 1) {
        changeIndex(0);
      }
    }
    if (direction === "left") {
      changeIndex(imgIndex - 1);
      if (imgIndex === 0) {
        changeIndex(imgs.length - 1);
      }
    }
  }
  return (
    <div className="slider">
      <div>
        <div>
          <div className="arrow left" data-direction="left" onClick={changeImg}>
            <div className="i-carbon-arrow-left"></div>
          </div>
          <div
            className="arrow right"
            data-direction="right"
            onClick={changeImg}
          >
            <div className="i-carbon-arrow-right"></div>
          </div>
          <img src={imgs[imgIndex]} />
        </div>
      </div>
      <img src={imgs[imgIndex]} alt="" />
    </div>
  );
}
