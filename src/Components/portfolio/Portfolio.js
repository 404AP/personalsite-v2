import React, { Component } from 'react'
import Projects from './Projects'
import './Portfolio.css'
import eyesIMG from '../../Assets/eyes.png'
import previewIMG from '../../Assets/preview.png'

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items:[{text: 'xxx', img:"", key:"0", title:"SpeedyIntegrationScript"}, {text: 'xxx', img:"", key:"1", title:"Grindset Global"} ],
          currentItem:{
            text:'',
            img: '',
            key:''
          },
          hasError: false
        };


    }
    
    setCurrentItem = () => {        
        const newItem = this.state.items[0];
        this.setState({
            currentItem: newItem
        });
        if (this.state.currentItem.title) {
            this.loadProjects();
        }
    }

    loadProjects = () => {
        //take projects out of items and make elements (list items)from them
        console.log('one');
    }

  render() {
    return (
        <div onLoad={this.setCurrentItem} className="portfolio-container">
            <h1 className="portfolio-header"> Portfolio</h1>
            <div className="portfolio-content-container">
                <div className="portfolio-left">
                    <h2 className="portfolio-projects-header">Projects</h2>
                    <div className='project-list-container'>
                        <ul className="project-examples-list">
                            <Projects items={this.state.items} ></Projects>
                        </ul>
                    </div>                
                <p className="contact-me-cta">Interested in Working Together? <br /> <span className='portfolio-contactme-wordhype'>Contact Me</span></p>
                <img src={eyesIMG} alt="alvanprice.com" className="portfolio-eyes" />            
                </div>
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

        </div>

        )
  }
}
