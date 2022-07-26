import React, { Component, Fragment } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Exercise from "./components/Exercise";
import SearchWidget from "./components/SearchWidget";
import RandomJokes from "./components/RandomJokes";
import Loading from "./components/Loading";
import Scroll from "./components/Scroll";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Comma from "./components/Comma";
import AnimatedNav from "./components/AnimatedNav";
import Increment from "./components/Increment";
import Slider from "./components/Slider";
import Drawing from "./components/Drawing";
import Kinetic from "./components/Kinetic";
import Vertical from "./components/Vertical";
import Editor from "./components/Editor";
import DoubleHeart from "./components/DoubleHeart";
import AutoText from "./components/AutoText";
import Board from "./components/Board";
import Poker from "./components/Poker";
import RichEditor from "./components/RichEditor";
export default class App extends Component {
  // state在哪,操作state的方法就在哪
  state = {
    todos: [
      { id: 1, things: "吃", done: false },
      { id: 2, things: "喝", done: false },
      { id: 3, things: "玩", done: false },
      { id: 4, things: "乐", done: false },
    ],
    songList: [],
    sex: 0,
    erList: [],
    dycBgc: "#ffffff",
    alphaBgc: "",
    alphaVal: 1,
    progressVal: 0.5,
  };
  // addTodo = (todo) => {
  //   this.setState({
  //     todos: [
  //       { id: this.state.todos.length + 1, things: todo, done: false },
  //       ...this.state.todos,
  //     ],
  //   });
  // };
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos: newTodos });
  };
  changeCheck = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done };
      else return todo;
    });
    this.setState({ todos: newTodos });
  };
  // 全选
  allChecked = (checked) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done: checked };
    });
    this.setState({ todos: newTodos });
  };
  //全选删除
  clearAllTodo = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.done !== true;
    });
    // const newTodos = todos.map((todo) => {
    this.setState({ todos: newTodos });
    // });
  };
  //
  songRefs = [];
  mouseenter(e, index) {
    this.songRefs[index].style.display = "block";
  }
  mouseleave(e, index) {
    this.songRefs[index].style.display = "none";
  }
  mousemove(e, index) {
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const width = this.songRefs[index].offsetWidth;
    const height = this.songRefs[index].offsetHeight;
    this.songRefs[index].style.left = x + "px";
    this.songRefs[index].style.top = y + "px";
    this.songRefs[index].style.backgroundPositionX = -x + "px";
    this.songRefs[index].style.backgroundPositionY = -y + "px";
    if (x <= width / 2) {
      this.songRefs[index].style.left = width / 2 + "px";
    }
    if (y <= height / 2) {
      this.songRefs[index].style.top = height / 2 + "px";
    }
    if (x >= width + width / 2) {
      this.songRefs[index].style.left = width + width / 2 + "px";
    }
    if (y >= height + height / 2) {
      this.songRefs[index].style.top = height + height / 2 + "px";
    }
  }
  //

  postSonger = async () => {
    console.log(this.state.sex);
    let result = await axios.get(`/api/artist/list?type=${this.state.sex}`);
    console.log(result);
    this.setState({ erList: result.data.artists });
  };
  things = (e) => {
    if (e.target.checked) {
      this.setState({ sex: e.target.value });
    }
  };
  colorChange = (e) => {
    this.setState({ dycBgc: e.target.value });
    this.setState({
      alphaBgc: this.hexToRgba(e.target.value, this.state.progressVal),
    });
  };
  colorClick = (e) => {
    console.log(e);
  };
  // rangechange
  rangeChange = (e) => {
    this.setState({ progressVal: e.target.value / 100 });
    if (this.state.dycBgc === "#ffffff") return;
    this.setState({
      alphaBgc: this.hexToRgba(this.state.dycBgc, this.state.progressVal),
    });
  };

  hexToRgba(hex, opacity) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    opacity = opacity >= 0 && opacity <= 1 ? Number(opacity) : 1;
    return result
      ? "rgba(" +
          [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
            opacity,
          ].join(",") +
          ")"
      : hex;
  }
  //
  upToTop = React.createRef();
  scrollToTop() {
    const _this = this;
    window.addEventListener("scroll", function (e) {
      const h = document.documentElement.scrollTop;
      if (h >= 1000) {
        _this.upToTop.current.style.zIndex = 1000;
      } else {
        _this.upToTop.current.style.zIndex = -999;
      }
    });
  }
  toTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };
  componentDidMount() {
    axios.get("/api/top/song").then((res) => {
      this.setState({ songList: res.data.data });
    });
    this.scrollToTop();
  }
  render() {
    return (
      <>
        <RichEditor />
        <Poker />
        <Board />
        <AutoText />
        <DoubleHeart />
        <Editor />
        <Vertical />
        <Kinetic />
        <Drawing />
        <Slider />
        <Increment />
        <AnimatedNav />
        <Comma />
        <Login />
        <Landing />
        <Scroll />
        <Loading />
        <RandomJokes />
        <SearchWidget bgc={this.state.alphaBgc} />
        <Exercise propsTest={"Image"} />
        <div className="todo-container" key={1}>
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List
              todos={this.state.todos}
              deleteTodo={this.deleteTodo}
              changeCheck={this.changeCheck}
            />
            <Footer
              todos={this.state.todos}
              allChecked={this.allChecked}
              clearAllTodo={this.clearAllTodo}
            />
          </div>
        </div>
        <div style={{ background: "lightblue", textAlign: "center" }}>
          <ul onClick={this.things} className="label-list">
            <li>
              <label>
                <input
                  type="radio"
                  name="type"
                  ref={(sex) => (this.sex = sex)}
                  value={1}
                />
                全部
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="type" value={2} />女
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="type" value={3} />队
              </label>
            </li>
          </ul>
          <button
            onClick={this.postSonger}
            className="songer-btn"
            style={{ backgroundColor: this.state.alphaBgc }}
          >
            发送
          </button>
          <br />
          <input
            className="songer-input"
            type="color"
            value={this.state.dycBgc}
            onChange={this.colorChange}
            onDoubleClick={this.colorClick}
          />
          <input type="range" onChange={this.rangeChange} />
          <br />
          <progress value={this.state.progressVal} />
        </div>
        <div className="songer">
          {this.state.erList.map((er) => {
            return (
              <div key={er.picId}>
                <img src={er.img1v1Url + "?param=200y200"} alt={er.name} />
                <p style={{ textAlign: "center" }}>{er.name}</p>
              </div>
            );
          })}
        </div>
        <div
          className="album-box"
          key={2}
          style={{ backgroundColor: this.state.alphaBgc }}
        >
          {this.state.songList.map((song, index) => {
            let bgi = {
              backgroundImage: `url(${song.album.blurPicUrl}?param=200y200)`,
            };
            return (
              <Fragment key={song.id}>
                <div
                  className="album-item"
                  onMouseEnter={(e) => this.mouseenter(e, index)}
                  onMouseLeave={(e) => this.mouseleave(e, index)}
                  onMouseMove={(e) => this.mousemove(e, index)}
                >
                  <img
                    src={song.album.blurPicUrl + "?param=200y200"}
                    alt={song.name}
                    style={{ display: "block" }}
                  ></img>
                  <div
                    className="filter"
                    ref={(c) => (this.songRefs[index] = c)}
                    style={bgi}
                  ></div>
                </div>
              </Fragment>
            );
          })}
        </div>
        <div
          className="icon-wrapper fixed bottom-5 right-5 -z-999 cursor-pointer text-3xl"
          onClick={this.toTop}
          ref={this.upToTop}
        >
          <div className="i-carbon-up-to-top"></div>
        </div>
      </>
    );
  }
}
