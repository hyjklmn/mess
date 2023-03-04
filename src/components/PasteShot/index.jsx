import React, { useRef, useEffect, useState } from "react"
import "./index.scss"
export default function index() {
  const shotArea = useRef(null)
  const [pasteContent, setPasteState] = useState("")
  useEffect(() => {
    shotArea.current.addEventListener("paste", function (e) {
      const clip = navigator.clipboard
      const text = clip.readText()
      text.then((t) => {
        setPasteState(t)
      })
    })
  })
  return (
    <div className="paste-shot">
      <div className="shot-area" ref={shotArea}>
        {pasteContent}
      </div>
    </div>
  )
}
