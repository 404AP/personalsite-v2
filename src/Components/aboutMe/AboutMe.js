import React, { Component } from 'react'
import FolderIMG from "../../Assets/folder.png"
import WindowIMG from "../../Assets/window.png"
import './AboutMe.css'







export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme-container">
          <h1 className="aboutme-header">About Me</h1>
            <div className="aboutme-content-conatiner">
                <div className="aboutme-left">
                    <div className="aboutme-skills">
                        <img src={WindowIMG} alt="Skills Section" className="window-background-img" />
                        <h4 className="aboutme-skills-subheader languages"> Languages:</h4>
                        <ul className="aboutme-languages-list">
                            <li className="aboutme-listitem java">
                            <div class="progressbar-title">
                                <h4>Java</h4>
                                <div class="percent" id="java-pourcent">
                                    <div className="value-1"></div>
                                    </div>
                                <h5 className="pourcent">85%</h5>
                            </div>
                            </li>
                            <li className="aboutme-listitem js">
                            <div class="progressbar-title">
                                <h4>JS</h4>
                                <div class="percent" id="js-pourcent">
                                    <div className="value-1"></div>
                                    </div>
                                <h5 className="pourcent">60%</h5>
                            </div>
                            </li>
                            <li className="aboutme-listitem python">
                            <div class="progressbar-title">
                                <h4>Python</h4>
                                <div class="percent" id="python-pourcent">
                                    <div className="value-1"></div>
                                    </div>
                                <h5 className="pourcent">70%</h5>
                            </div>
                            </li>
                            <li className="aboutme-listitem html">
                            <div class="progressbar-title">
                                <h4>HTML</h4>
                                <div class="percent" id="html-pourcent">
                                    <div className="value-1"></div>
                                    </div>
                                <h5 className="pourcent">60%</h5>
                            </div>
                            </li>
                            <li className="aboutme-listitem css">
                            <div class="progressbar-title">
                                <h4>CSS</h4>
                                <div class="percent" id="css-pourcent">
                                    <div className="value-1"></div>
                                    </div>
                                <h5 className="pourcent">50%</h5>
                            </div>       
                            </li>
                            </ul>
                        <h4 className="aboutme-skills-subheader SoftwareSkills"> Software Skills:</h4>
                        <ul className="aboutme-softwarelist">
                            <li className="aboutme-listitem photoshop">
                            <div class="progressbar-title">
                                <h4>PS</h4>
                                <div class="percent" id="am-pourcent">
                                    <div className="value-1"></div>
                                    </div>
                                <h5 className="pourcent">80%</h5>
                            </div> 
                            </li>
                            <li className="aboutme-listitem aftereffects">
                            <div class="progressbar-title">
                                <h4>AE</h4>
                                <div class="percent" id="ae-pourcent">
                                    <div className="value-1"></div>
                                    </div>
                                <h5 className="pourcent">70%</h5>
                            </div> 
                            </li>
                            </ul>
                        </div>
                    <div className="aboutme-holder">
                        </div>
                    <div className="aboutme-interest">
                        <img src={WindowIMG} alt="Skills Section" className="window-background-img" />
                        <h4 className="aboutme-skills-subheader interest"> Interest:</h4>
                        <ul className="interest-list">
                            <li className="aboutme-listitem">I really like  Economics in General</li>
                            <li className="aboutme-listitem">Crypto is the future of finance and NFT's will change investing forever</li>
                            <li className="aboutme-listitem">I love the impact of sports more than any particular team or player</li>
                            </ul>
                        </div>
                    <div className="aboutme-summary">
                        <img src={WindowIMG} alt="Skills Section" className="window-background-img" />
                        <h4 className="aboutme-skills-subheader summary"> Summary:</h4>
                        <p className="aboutme-summary-p">
                            I specialize in frontend development but I think it is important to be a Full Stack Engineer . Creating and Implementing UI's down to very fine details is very fulfilling to say the least. Whenever I can find free time I like to work on small projects to help me get better at building and <span className="aboutme-summary-wordhype">  &lt;/styling&gt;   </span> websites. These great looking website are even better when they have a robust and secure backend to power the application.
                            </p>
                        </div>
                    </div>
                <div className="aboutme-right">

                    <div className="aboutme-folder-container">
                        <img src={FolderIMG} alt="Download Resume" className="aboutme-foldericon" />
                        <p className="folder-cap">
                            Take a Copy of my Resume.
                            
                            </p>
                        <button className="aboutme-download-button">Download</button> 
                        </div>
                        

                        </div>
                  
                </div>
        </div>
        )
  }
}

