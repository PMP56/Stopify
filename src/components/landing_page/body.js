import React, { Component } from "react";
import Banner from "./images/banner2.jpg";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import "./styles/body_style.css";

class Body extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <div className="banner_item">
            <h1>Music for everyone</h1>
            <br/>
            <button className="button_banner">Get Started</button>
          </div>
        </div>
        <div className="content">
          <p>
            Stopify gives you instant access to millions of songs – from old
            favorites to the latest hits. Just hit play to stream anything you
            like.
          </p>
          <div className="images">
            <div className="image_contents">
              <img src={image1} alt="stopify" />
              <br />
              <h5>Listen everywhere</h5>
            </div>
            <div className="image_contents">
              <img src={image3} alt="stopify" />
              <br />
              <h5>Unlimited, ad-free music</h5>
            </div>
            <div className="image_contents">
              <img src={image2} alt="stopify" />
              <br />
              <h5>Download music & listen offline</h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
