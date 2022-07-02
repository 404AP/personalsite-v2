import React, { Component } from 'react'
import Projects from './Projects'
import './Portfolio.css'
import eyesIMG from '../../Assets/eyes.png'
import WindowIMG from "../../Assets/window.png"
import powershellIMG from '../../Assets/powershell_icon.png'
import grindsetglobalThumbIMG from '../../Assets/grindsetglobal_thumb.png'
import speedyIMG from '../../Assets/previewSpeedy.png'
import ggIMG from '../../Assets/previewGG.png'
import { set } from 'react-hook-form'
// import speedyIMG from '../../Assets/speedy.png'

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items:[
            {text: 'xxx',
            thumbnail: powershellIMG,
            preview: speedyIMG,
            description:"speedy",
            key:"0",
            title:"Speedy Integration Tool"}
            ,
            {text: 'xxx',
            thumbnail: grindsetglobalThumbIMG,
            preview: ggIMG,
            description:"gg",
            key:"1",
            title:"Grindset Global"}

         ],

          currentItem:{
            text:'',
            description:"",
            img: '',
            key:''
          },
          hasError: false
        };

        this.setCurrentItem = this.setCurrentItem.bind(this);

    }
    
    setCurrentItem(item) {
        const newItem = (!(typeof item === 'undefined' || item === null)) ? this.state.items[item] : this.state.items[0];
        console.log(item);
        this.setState({
            currentItem: newItem
        });
    }
    componentDidMount() {
        this.setCurrentItem();
    }


  render() {
    return (
        <div style={{backgroundImage: 'url(' + WindowIMG + ')'}} className="portfolio-container">
            <h1 className="portfolio-header"> Portfolio</h1>
            <div className="portfolio-content-container">
                <div className="portfolio-left">
                    <h2 className="portfolio-projects-header">Projects</h2>
                    <div className='project-list-container'>
                        <ul className="project-examples-list">
                            <Projects settingCurrentItem={this.setCurrentItem} currentItem={this.state.currentItem} items={this.state.items}></Projects>
                        </ul>
                    </div>                
                <p className="contact-me-cta">Interested in Working Together? <br /> <span className='portfolio-contactme-wordhype'>Contact Me</span></p>
                <img src={eyesIMG} alt="alvanprice.com" className="portfolio-eyes" />            
                </div>
            <div  className="portfolio-right">
                <div className="portfolio-preview-container">
                    <img src={this.state.currentItem.preview} alt="example project" className="preview-image" />
                    </div>
                <div className="site-des-container">
                    <h1 className="portfolio-site-description-header">SITE DESCRIPTION: {this.state.currentItem.title}</h1>
                    <p className="portfolio-site-details"> {this.state.currentItem.description} </p>
                    </div>
                </div>
            </div>

        </div>

        )
  }
}
