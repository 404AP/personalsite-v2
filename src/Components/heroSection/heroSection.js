import React, { useEffect, useState} from 'react'
import { RiLockFill, RiLockUnlockFill} from "react-icons/ri/";
import {HashLink as Link} from 'react-router-hash-link';
import NodeImage from "../../Assets/node.png"
import VercelImage from "../../Assets/vercel.svg"
import ReactImage from "../../Assets/react.png"
import MonitorImage from "../../Assets/monitor.png"
import "./HeroSection.css"
import useScrollBlock from '../../useScrollBlock';



export default function HeroSection() {

  const [blockScroll, allowScroll] = useScrollBlock();
  const [locked, setLock] = useState(true);

  const hide = {
    display: "none"
  };


  


  function handleClick() { 
    setLock(false); 
    allowScroll()
    console.log("HANDLED");
  }  

  
  useEffect(() => {
  
  if(("/" == window.location.href.charAt(window.location.href.length - 1)) ) {blockScroll();} else {setLock(false);};
  console.log(window.location.href);
  return () => {
      
  };
  }, []);

  


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
                                    <Link onClick={handleClick} className="link" to='#aboutMe' smooth>
                                        Enter <span className="lock"> <RiLockFill style={locked?"":hide}/> <RiLockUnlockFill style={locked?hide:""} /> </span>
                                    </Link>    
                                </button>
                                <br></br>
                                <p className="cta-hero-right-subtext">
                                    Press the Button to Unlock
                                    </p>
                        </div>
                </div>
            </div>
    </div>
  )
}
