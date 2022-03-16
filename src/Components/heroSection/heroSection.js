import React, { Component } from 'react'
import NodeImage from "../../Assets/node.png"
import AWSImage from "../../Assets/aws.png"
import ReactImage from "../../Assets/react.png"
import MonitorImage from "../../Assets/monitor.png"
import "./HeroSection.css"

export default class HeroSection extends Component {
  render() {
    return (
      <div className="hero-container">
          <div className="top-edge-typography">
              <div className="top-quotebox">
                  <p className="quote-tag">"Logic will get you from A to B.  Imagination will take you everywhere."  -A. Einstein</p>
                  </div>
              <div className="top-nametag-box">
                  <p className="name-tag">2022 Alvan Price</p>
                  </div>
            </div>
                <div className="heroContent">
                    <div className="hero-left">
                        <div className="hero-left-top"> 
                            <h1 className="hero-name">
                                ALVAN <br></br>
                                PRICE
                                </h1>
                            <h2 className="hero-subheading">
                                &lt;/Full Stack Devloper&gt;
                                </h2>
                        </div>
                        <div className="hero-left-bottom">
                                    <img className="node-img" src={NodeImage}  alt="Node JS"  />
                                    <img className="react-img" src={ReactImage}  alt="React" />
                                    <img className="aws-img" src={AWSImage}  alt="Amazon Web Services"  />
                                </div>
                            </div>
                    <div className="hero-right">
                            <div className="monitor-container">
                                    <img src={MonitorImage}  alt="Node JS" className="node-image" />
                                </div>
                            <div className="hero-right-button-container">
                                    <button className="cta-hero-right">
                                        Enter
                                        </button>
                                    <p className="cta-hero-right-subtext">
                                        Press the Button or Swipe Down
                                        </p>
                                </div>
                    </div>
                </div>
    </div>
    )
  }
}
