import React, { Component } from "react";
import "./index.scss";
export default class index extends Component {
  list = [0, 1, 2, 3, 4];
  domRefs = [];
  logos = [
    "i-carbon-logo-youtube",
    "i-carbon-logo-twitter",
    "i-carbon-logo-instagram",
    "i-carbon-logo-facebook",
    "i-carbon-logo-github",
  ];
  componentDidMount() {
    this.domRefs.forEach((counter) => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = counter.getAttribute("data-target");
        const c = +counter.innerText;
        const increment = +target / 200;
        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }

  render() {
    return (
      <div className="increment-page">
        <ul>
          {this.list.map((i, index) => {
            const lastIndex = this.logos[i].lastIndexOf("-");
            return (
              <li key={i}>
                <div className={this.logos[i] + " " + "logo"}></div>
                <span
                  className="text-12 counter"
                  data-target="12000"
                  ref={(c) => (this.domRefs[index] = c)}
                ></span>
                <span className="text-5">
                  {/* {this.logos[i].substring(lastIndex + 1, this.logos[i].length)} */}
                  {this.logos[i].substring(this.logos[i].length, lastIndex + 1)}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
