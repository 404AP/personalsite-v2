import React, { Component } from 'react'
import './Portfolio.css'
import eyesIMG from '../../Assets/eyes.png'
import previewIMG from '../../Assets/preview.png'

export default class Portfolio extends Component {
  render() {
    return (
        <div className="portfolio-container">
            <h1 className="portfolio-header"> Portfolio</h1>
            <div className="portfolio-left">
                <h2 className="portfolio-projects-header">Projects</h2>
                <ul className="project-examples-list">
                    <li className="project-list-item">
                        </li>
                    <li className="project-list-item">
                        </li>
                    <li className="project-list-item">
                        </li>
                    </ul>
                </div>
                <p className="contact-me-cta">Interested in Working Together? <span className='portfolio-contactme-wordhype'>Contact Me</span></p>
                <img src={eyesIMG} alt="alvanprice.com" className="portfolio-eyes" />            
            <div className="portfolio-right">
                <div className="portfolio-preview-container">
                    <img src={previewIMG} alt="example project" className="preview-image" />
                    </div>
                <div className="site-des-container">
                    <h1 className="portfolio-site-description-header">SITE DESCRIPTION -</h1>
                    <p className="portfolio-site-details"> Portfolio Site Details</p>
                    </div>
                </div>
            </div>
        )
  }
}
