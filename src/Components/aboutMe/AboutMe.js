import React, {useState} from 'react'
import { InView } from 'react-intersection-observer';
import FolderIMG from "../../Assets/folder.png"
import WindowIMG from "../../Assets/window.png"
import {RiDownload2Line} from "react-icons/ri/";
import './AboutMe.css'

export default function AboutMe() {


  const [isVisible,setVisible] = useState(false);

  const queueAnimation = (visible) => {
    if (visible) {
        setVisible(true);
    }
  }

  return (
    <InView  as="div" className="aboutme-container" id="aboutMe" onChange={(inView, entry) => queueAnimation(inView)}>
    <h1 className="aboutme-header">About Me</h1>
      <div className="aboutme-content-conatiner">
          <div className="aboutme-left">
              <div className="aboutme-skills">
                  <img src={WindowIMG} alt="Skills Section" className="window-background-img" />
                  <h4 className="aboutme-skills-subheader languages"> Languages:</h4>
                  <br></br>
                  <ul className="aboutme-languages-list">
                      <li className="aboutme-listitem js">
                      <div className="progressbar-title">
                          <h4>JS</h4>
                          <div className="percent" id="js-pourcent">
                              <div className={"value" + (isVisible?" animated":"")}></div>
                          </div>
                          <h5 className="pourcent">90/100</h5>
                      </div>
                      </li>
                      <li className="aboutme-listitem html">
                      <div className="progressbar-title">
                          <h4>HTML</h4>
                          <div className="percent" id="html-pourcent">
                              <div className={"value" + (isVisible?" animated":"")}></div>
                              </div>
                          <h5 className="pourcent">90/100</h5>
                      </div>
                      </li>                            
                      <li className="aboutme-listitem java">
                      <div className="progressbar-title">
                          <h4>Java</h4>
                          <div className="percent" id="java-pourcent">
                              <div className={"value" + (isVisible?" animated":"")}></div>
                              </div>
                          <h5 className="pourcent">85/100</h5>
                      </div>
                      </li>
                      <li className="aboutme-listitem css">
                      <div className="progressbar-title">
                          <h4>CSS</h4>
                          <div className="percent" id="css-pourcent">
                              <div className={"value" + (isVisible?" animated":"")}></div>
                              </div>
                          <h5 className="pourcent">85/100</h5>
                      </div>       
                      </li>
                      <li className="aboutme-listitem python">
                      <div className="progressbar-title">
                          <h4>Python</h4>
                          <div className="percent" id="python-pourcent">
                              <div className={"value" + (isVisible?" animated":"")}></div>
                              </div>
                          <h5 className="pourcent">80/100</h5>
                      </div>
                      </li>
                      <li className="aboutme-listitem php">
                      <div className="progressbar-title">
                          <h4>Php</h4>
                          <div className="percent" id="php-pourcent">
                              <div className={"value" + (isVisible?" animated":"")}></div>
                              </div>
                          <h5 className="pourcent">70/100</h5>
                      </div>       
                      </li>
                      </ul>
              
                  </div>
              <div className="aboutme-holder">
                  </div>
              <div className="aboutme-interest">
                  <img src={WindowIMG} alt="Skills Section" className="window-background-img" />
                  <h4 className="aboutme-skills-subheader interest"> Interest:</h4>
                  <div className="wrapper">
                    <ul className="interest-list">
                        <li className="aboutme-listitem">Economics in General</li>
                        <li className="aboutme-listitem">Positioning Crypto as the future of Global Finance</li>
                        <li className="aboutme-listitem">Building Real World Utility for Solana NFTs</li>
                        <li className="aboutme-listitem">I love the impact of sports more than any particular team or player</li>
                        <li className="aboutme-listitem">Various Art Forms but mainly Music, Paintings,  Film, and NFTs.</li>
                        </ul>
                    </div>    
                  </div>
              <div className="aboutme-summary">
                  <img src={WindowIMG} alt="Skills Section" className="window-background-img" />
                  <h4 className="aboutme-skills-subheader summary"> Summary:</h4>
                    <div className="wrapper">
                        <p className="aboutme-summary-p">
                        I specialize in front-end development but I think it is important to be a Full Stack Engineer. Creating and Implementing UI's down to very fine details is very fulfilling, to say the least. Whenever I can find free time I like to work on small projects to help me get better at building and <span className="aboutme-summary-wordhype">  &lt;/styling&gt;   </span> websites. You may also catch me working on some photography, music, or buying more NFTs on Solana.
                        </p>
                    </div>
                  </div>
              </div>
          <div className="aboutme-right">

              <div className="aboutme-folder-container">
                  <img src={FolderIMG} alt="Download Resume" className="aboutme-foldericon" />

                  <button className="aboutme-download-button">
                    <a href="https://docs.google.com/document/d/1Tmzk3M3Ymhiafsap6po-5VG3ow3DkbkKtPf1xU1dfkM/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                        Resume <RiDownload2Line/>
                    </a>
                    </button> 
                  </div>
                  

                  </div>
            
          </div>
  </InView>
  )
}

