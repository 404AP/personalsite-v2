import React, { Component } from 'react'
import NodeImage from "../../Assets/node.png"
import VercelImage from "../../Assets/vercel.svg"
import ReactImage from "../../Assets/react.png"
import MonitorImage from "../../Assets/monitor.png"
import "./HeroSection.css"

// var lang = {
//     "html": "100%",
//     "css": "90%",
//     "javascript": "70%",
//     "php": "55%",
//     "angular": "65%"
//   };
  
//   var multiply = 4;
  
//   $.each( lang, function( language, pourcent) {
  
//     var delay = 700;
    
//     setTimeout(function() {
//       $('#'+language+'-pourcent').html(pourcent);
//     },delay*multiply);
    
//     multiply++;
  
// });


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
                        <br></br>    
                        <div className="hero-left-bottom">
                                    <img className="node-img" src={NodeImage}  alt="Node JS"  />
                                    <img className="react-img" src={ReactImage}  alt="React" />
                                    <img className="vercel-img" src={VercelImage}  alt="Vercel"  />
                                </div>
                            </div>
                    <div className="hero-right">
                            <div className="monitor-container">
                                    <img src={MonitorImage}  alt="Node JS" className="node-image" />
                                </div>
                                <br></br>
                            <div className="hero-right-button-container">
                                    <button className="cta-hero-right">
                                        Enter
                                        </button>
                                        <br></br>
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
