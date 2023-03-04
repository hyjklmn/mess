import React from "react"
import "./InertuaPlugin.css"
export default function InertiaPlugin() {
  return (
    <div>
      <div id="container">
        <div className="box" id="box1">
          Drag and throw me
        </div>
        <div className="box" id="box2" style={{ backgroundＣolor: "red" }}>
          Drag and throw me too
        </div>
      </div>
    </div>
  )
}
