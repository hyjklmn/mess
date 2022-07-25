import React, { useState, useRef } from "react";
import "./index.scss";
export default function index() {
  const [wordsArr, changeWordsArr] = useState([]);
  const lights = useRef([]);

  function splitWord(e) {
    const value = e.target.value.replaceAll(" ", "");
    let str;
    str = value.trim().split(",");
    if (str !== "") {
      changeWordsArr([...str]);
    }
    if (e.keyCode === 13) {
      if (lights.current.length === 0) return;
      e.target.value = "";
      randomSelect();
    }
  }
  function randomSelect() {
    let timer = setInterval(() => {
      const tag = randomTag();
      if (tag) {
        light(tag);
        setTimeout(() => {
          unLight(tag);
        }, 80);
      }
    }, 80);
    setTimeout(() => {
      clearInterval(timer);
      setTimeout(() => {
        const tag = randomTag();
        if (tag) {
          light(tag);
        }
      }, 100);
    }, 3000);
  }
  function randomTag() {
    const random = Math.floor(Math.random() * lights.current.length);
    return lights.current[random];
  }
  function light(tag) {
    tag.classList.add("high-light");
  }

  function unLight(tag) {
    tag.classList.remove("high-light");
  }
  return (
    <div
      className="comma flex flex-col justify-center items-center"
      style={{ color: "#fff" }}
    >
      <h3 className="mb-0">PLEASE INPUT ANY WORDS AND USE COMMA SPLIT.</h3>
      <h3 className="mt-0">PRESS ENTER WHEN YOU DONE</h3>
      <textarea
        type="text"
        className="w-150 h-30 rounded outline-0 text-size-2xl px-3 py-2 box-border"
        style={{ resize: "none" }}
        onKeyUp={splitWord}
      />
      <div className="comma-wrapper w-100  flex flex-wrap m-5">
        {wordsArr.map((word, index) => {
          return word === "" ? (
            ""
          ) : (
            <div
              ref={(word) => (lights.current[index] = word)}
              key={index}
              className="comma-item px-4 py-1 box-border rounded-10 m-1 "
            >
              {word}
            </div>
          );
        })}
      </div>
    </div>
  );
}
// import React, { Component, createRef } from "react";
// import "./index.scss";
// export default class index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       wordsArr: [],
//     };
//     this.lights = [];
//   }
//   splitWord = (e) => {
//     const value = e.target.value.trim();
//     let str;
//     str = value.split(",");

//     this.setState({
//       wordsArr: str,
//     });
//     if (e.keyCode === 13) {
//       e.target.value = "";
//       //   highLight();
//       console.log(this.lights);
//     }
//   };
//   render() {
//     return (
//       <div className="comma flex flex-col justify-center items-center">
//         <textarea
//           type="text"
//           className="w-100 h-50 rounded outline-0 text-size-2xl px-3 py-2 box-border"
//           style={{ resize: "none" }}
//           onKeyUp={this.splitWord}
//         />
//         <div className="comma-wrapper w-100  flex flex-wrap m-5">
//           {this.state.wordsArr.map((word, index) => {
//             return word === "" ? (
//               ""
//             ) : (
//               <div
//                 ref={(word) => (this.lights[index] = word)}
//                 key={index}
//                 className="comma-item px-4 py-1 box-border rounded-10 m-1 "
//               >
//                 {word}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
