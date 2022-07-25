import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
export default function index() {
  const canvas = useRef();

  const [isPress, changePress] = useState(false);
  const [pos, changePos] = useState([]);
  const [color, colorChange] = useState("#000000");
  function down(e) {
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    changePress(true);
    changePos([x, y]);
  }
  function move(e) {
    if (isPress) {
      let x = pos[0];
      let y = pos[1];
      let x1 = e.nativeEvent.offsetX;
      let y1 = e.nativeEvent.offsetY;
      lines(x, y, x1, y1);
      drawCircle(x1, y1);
      changePos([x1, y1]);
    }
  }
  function upOrleave() {
    changePos([]);
    changePress(false);
  }
  function lines(x, y, x1, y1) {
    let ctx = canvas.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.stroke();
  }
  function drawCircle(x, y) {
    let ctx = canvas.current.getContext("2d");

    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
  function changeColor(e) {
    colorChange(e.target.value);
  }
  function clearCanvas() {
    let ctx = canvas.current.getContext("2d");
    ctx.clearRect(0, 0, 800, 600);
  }

  return (
    <div className="drawing">
      <div>
        <canvas
          width={800}
          height={600}
          ref={canvas}
          onMouseDown={down}
          onMouseMove={move}
          onMouseUp={upOrleave}
          onMouseLeave={upOrleave}
        ></canvas>
        <div>
          <div>
            <input type="color" onChange={changeColor} />
          </div>
          <div className="i-carbon-clean" onClick={clearCanvas}></div>
        </div>
      </div>
    </div>
  );
}
