import React, { Component } from 'react'
import FolderIMG from "../../Assets/folder.png"
import './AboutMe.css'

export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme-container">
          <h1 className="aboutme-header">About Me</h1>
            <div className="aboutme-content-conatiner">
                <div className="aboutme-left">
                    <div className="aboutme-skills">
                        <h4 className="aboutme-skills-subheader"> Languages:</h4>
                        <ul className="aboutme-languages-list">
                            <li className="aboutme-listitem">Java</li>
                            <li className="aboutme-listitem">JS</li>
                            <li className="aboutme-listitem">Python</li>
                            <li className="aboutme-listitem">HTML</li>
                            <li className="aboutme-listitem">CSS</li>
                            </ul>
                        <h4 className="aboutme-skills-subheader"> Software Skills:</h4>
                        <ul className="aboutme-softwarelist">
                            <li className="aboutme-listitem">Photoshop</li>
                            <li className="aboutme-listitem">After Effects</li>
                            <li className="aboutme-listitem">Excel</li>
                            </ul>
                        </div>
                    <div className="aboutme-holder">
                        </div>
                    <div className="aboutme-interest">
                        <h4 className="aboutme-skills-subheader"> Interest:</h4>
                        <ul className="interest-list">
                            <li className="aboutme-listitem">I really like  Economics and Finance in General</li>
                            <li className="aboutme-listitem">Crypto is the future of finance and NFT's will change investing forever</li>
                            <li className="aboutme-listitem">I love the impact of sports more than any particular team or player</li>
                            </ul>
                        </div>
                    <div className="aboutme-summary">
                        <h4 className="aboutme-skills-subheader"> Summary:</h4>
                        <p className="aboutme-summary-p">
                            I specialize in frontend development but I think it is important to be a Full Stack Engineer . Creating and Implementing UI's down to very fine details is very fulfilling to say the least. Whenever I can find free time I like to work on small projects to help me get better at building and <span className="aboutme-summary-wordhype">  &lt;/styling&gt;   </span> websites. These great looking website are even better when they have a robust and secure backend to power the application.
                            </p>
                        </div>
                    </div>
                <div className="aboutme-right">
                    <img src={FolderIMG} alt="Download Resume" className="aboutme-foldericon" />
                    <button className="aboutme-download-button">Download</button> 
                    </div>
                </div>
        </div>
    )
  }
}
