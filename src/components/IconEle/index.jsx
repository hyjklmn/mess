import React, { useRef } from "react"
import "./index.scss"
import {
  IconIcons,
  IconAlien,
  IconBallBowling,
  IconBandage,
  IconBat,
  IconBellSchool,
  IconBraces,
  IconCricket,
  IconHandRock,
  IconGhost,
  IconHandMove,
  IconSkull,
  IconZeppelin,
  IconWashMachine,
  IconThumbUp,
  IconTie,
  IconSword,
} from "@tabler/icons"
import { randomColor } from "../../utils"
export default function index() {
  const father = useRef()
  setTimeout(coloring, 10)
  function coloring() {
    const children = father.current && father.current.children
    for (let icon of children) {
      icon.style.color = randomColor()
    }
  }

  function changeColor() {
    coloring()
  }
  return (
    <div className="icons-page">
      <div className="icon-title" onClick={changeColor}>
        <IconIcons />
      </div>
      <div className="icon-page" ref={father}>
        <IconAlien />
        <IconBallBowling />
        <IconBandage />
        <IconBat />
        <IconBellSchool />
        <IconBraces />
        <IconCricket />
        <div className="jess">
          <IconHandRock className="rock-left" />
          <IconHandRock className="rock-right" />
        </div>
        <IconGhost />
        <IconHandMove />
        <IconSkull />
        <IconZeppelin />
        <IconWashMachine />
        <IconThumbUp />
        <IconTie />
        <IconSword />
      </div>
    </div>
  )
}
