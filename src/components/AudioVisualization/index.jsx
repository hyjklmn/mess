import React, { useEffect } from "react"
import axios from "axios"

import "./index.scss"
import { randomColor } from "../../utils"
export default function index() {
  const config = {
    anonymous_token:
      "bf8bfeabb1aa84f9c8c3906c04a04fb864322804c83f5d607e91a04eae463c9436bd1a17ec353cf70a72fdf0cc97532eb76851b14e6fbf88993166e004087dd3964ce36a9873d2936e2e6ece3b183363b73d122fec00adb899d44bc167703e93807e650dd04abd3fb8130b7ae43fcc5b",
    resourceTypeMap: {
      0: "R_SO_4_",
      1: "R_MV_5_",
      2: "A_PL_0_",
      3: "R_AL_3_",
      4: "A_DJ_1_",
      5: "R_VI_62_",
      6: "A_EV_2_",
    },
  }
  const qs = {
    id: 462791935,
    br: 999000,
    realIP: "116.25.146.177",
    cookie: config.anonymous_token,
  }
  const getUrl = () => {
    axios
      .get(`/api/song/url`, {
        params: qs,
      })
      .then((data) => {
        console.log(data)
      })
  }
  getUrl()

  useEffect(() => {
    const audio = document.querySelector("audio")
    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext("2d")
    // 初始化画布
    console.log(devicePixelRatio)
    function initctx() {
      canvas.width = window.innerWidth * devicePixelRatio
      canvas.height = (window.innerHeight / 2) * devicePixelRatio
    }
    initctx()
    // 是否已初始化
    let isInit = false
    // 数组，用于接收分析器节点的分析数据
    let dataArray
    // 分析器节点
    let analyser
    audio.onplay = function () {
      // 判断是否初始化
      if (isInit) {
        return
      }

      // 开始初始化
      // 创建音频上下文
      const audioCtx = new AudioContext()
      console.log(audioCtx)
      // 创建音频源节点
      const source = audioCtx.createMediaElementSource(audio)

      // 创建分析器节点
      analyser = audioCtx.createAnalyser()
      analyser.fftSize = 512
      // 接收分析器节点的分析数据
      dataArray = new Uint8Array(analyser.frequencyBinCount)
      source.connect(analyser)
      analyser.connect(audioCtx.destination)

      // 已初始化
      isInit = true
    }
    // 把分析出来的波形绘制到canvas上
    function draw() {
      // 逐帧绘制
      requestAnimationFrame(draw)

      // 接下来清空画布
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)
      if (!isInit) {
        return
      }
      // 让分析器节点分析出数据到数组中
      analyser.getByteFrequencyData(dataArray)
      const len = dataArray.length / 2 //条的数量，取一半，前半部分（低频范围就好，高频部分人耳几乎听不到，看不到波形）
      const barWidth = width / len / 2 //条的宽度
      if (mode) {
        ctx.fillStyle = randomColor()
      }
      // 循环绘制
      for (let i = 0; i < len; i++) {
        const data = dataArray[i]
        const barHeight = (data / 255) * height //条的高度
        const x1 = i * barWidth + width / 2 //右边区域中条的x坐标
        const x2 = width / 2 - (i + 1) * barWidth //左边区域中条的x坐标 镜像
        const y = height - barHeight //条的y坐标

        if (!mode) {
          ctx.fillStyle = randomColor()
        }
        ctx.fillRect(x1, y, barWidth - 2, barHeight) //填充右边区域
        ctx.fillRect(x2, y, barWidth - 2, barHeight) //填充左边区域
      }
    }

    draw()
  })
  let mode = true // 单色
  function changeColorMode() {
    mode = !mode
  }
  return (
    <div className="visual">
      <canvas></canvas>
      <audio
        crossOrigin="anonymous"
        src="http://m7.music.126.net/20230304133731/d3e231953c01693781d6d8bbe0d23415/ymusic/ac09/de15/3857/58866aa72c5c06fcc9d12509575b5149.mp3"
        controls
      ></audio>
      <button onClick={changeColorMode}>更改颜色模式</button>
    </div>
  )
}
