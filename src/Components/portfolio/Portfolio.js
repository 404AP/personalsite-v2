import React, { Component } from 'react'
import Projects from './Projects'
import './Portfolio.css'
import eyesIMG from '../../Assets/eyes.png'
import WindowIMG from "../../Assets/window.png"
import powershellIMG from '../../Assets/powershell_icon.png'
import grindsetglobalThumbIMG from '../../Assets/grindsetglobal_thumb.png'
import speedyIMG from '../../Assets/previewSpeedy.png'
import gtthumbIMG from '../../Assets/gt.png'
import ggIMG from '../../Assets/previewGG.png'
import gsIMG from '../../Assets/gs.png'
import itpreview from '../../Assets/itpreview.png'
import gtpreview from '../../Assets/gtpreview.png'


import { HashLink as Link } from 'react-router-hash-link'

// import speedyIMG from '../../Assets/speedy.png'

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items:[
            {link: 'https://github.com/404AP/Speedy-Integration-Tool',
            thumbnail: powershellIMG,
            preview: speedyIMG,
            description:"This tool was created at my last job to automate the mundane process of setting up a new Business Computer. In our shop, we worked with Lenovo and Dell desktops, laptops, and servers. Often times we would get wholesale shipments of new computers to bring online, which could take weeks to do individually by hand. I created this script to automate as much of the software process as possible so that we would not fall behind on the repairs that we were also responsible for. Over a couple of months, this tool grew to a central part of the success of the Bench team.",
            key:"0",
            title:"Speedy Integration Tool"}
            ,
            {text: 'xxx',
            thumbnail: grindsetglobalThumbIMG,
            preview: ggIMG,
            description:"Grindset Global is a Lifestyle brand that I started in high school. The goal of Grindset Global is to eventually create all the tools someone would need to become the next big culture influencer via social media and the tools that a business might need to directly engage a niche audience.  In the past, I have created/edited graphics, done photoshoots, built a Shopify, and managed a social media page. My need project will be to create an NFT collection on Solana and reward a percentage of the proceeds to artists who build more awareness for the brand. The rest of the funds will be used for community donations and social media competitions that spill over into the real world. These competitions will be the breeding ground for the next big influencers.",
            key:"1",
            title:"Grindset Global"}
            ,
            {text: 'xxx',
            thumbnail: gtthumbIMG,
            preview: gtpreview,
            description:"I went to Georgia Tech and majored in Computer Science. I am currently a junior by credits and hope to finish online school by the end of 2023. I have already taken multiple courses on advanced computing concepts like Data Structures & Algorithms, Computer Systems & Organization, Object-Oriented Programming, and Databases. Most of these classes were taught using java except Computer Systems which was taught in C and Databases which introduced me to SQL.",
            key:"2",
            title:"Course Work"}
            ,
            {text: 'xxx',
            thumbnail: gsIMG,
            preview: itpreview,
            description:"I have over a decade of experience in IT Support because I started in the summer of 2011. Since then I have held roles at two Schools, Geek Squad and a Lenovo/DELL Authorized Repair Center.  I love explaining complex technology to people who don't understand it as well. During my time in IT, I have set up thousands of computers, done numerous software repairs,  saved data from total loss, done numerous hardware repairs( whenever we could afford parts), and lastly helped so many people to do their jobs more efficiently.",
            key:"3",
            title:"IT Background"}
            

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
        <div style={{backgroundImage: 'url(' + WindowIMG + ')'}} className="portfolio-container" id="portfolio">
            <h1 className="portfolio-header"> Portfolio</h1>
            <div className="portfolio-content-container">
                <div className="portfolio-left">
                    <h2 className="portfolio-projects-header">Projects / Achievements</h2>
                    <div className='project-list-container'>
                        <ul className="project-examples-list">
                            <Projects settingCurrentItem={this.setCurrentItem} currentItem={this.state.currentItem} items={this.state.items}></Projects>
                        </ul>
                    </div>                
                <p className="contact-me-cta">Interested in Working Together? <br /> <Link to="#contact" smooth className='portfolio-contactme-wordhype'>Contact Me</Link></p>
                <img src={eyesIMG} alt="alvanprice.com" className="portfolio-eyes" />            
                </div>
            <div  className="portfolio-right">
                <div className="portfolio-preview-container">
                    <img src={this.state.currentItem.preview} alt="example project" className="preview-image" />
                    </div>
                <div className="site-des-container">
                    <h1 className="portfolio-site-description-header"> {"//"} {this.state.currentItem.title}</h1>
                    <p className="portfolio-site-details"> {this.state.currentItem.description} </p>
                    </div>
                </div>
            </div>

        </div>

        )
  }
}
