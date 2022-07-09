import React, { Component } from 'react';
import { RiMenu3Line, RiCloseFill, RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri/";
import {HashLink as Link} from "react-router-hash-link";
import './Navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          navbar: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        let value = !(this.state.navbar);
        this.setState({
            navbar: value
        });
    }
  render() {
    return (
      <div className={"navbar-container " + (this.state.navbar ? 'isOpen': 'isClosed')}>
        <div className="nav-icon-closed">
            <RiMenu3Line onClick={this.toggleNav} className={'open ' + (this.state.navbar ? 'not-visible': '')} style={{color: '#67ba43'}}/>
        </div>
        <div className="nav-icon-open">
            <RiCloseFill onClick={this.toggleNav} className={'close ' + (this.state.navbar ? '' : 'not-visible') }/>
        </div>
        <div className={"drawer " + (this.state.navbar ? '' : 'not-visible')}>
            <ul className="menu-options">
                <li className="menu-item">
                    <Link to="#" className='link' smooth>
                        Home
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="#" className='link' smooth>
                        About Me
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="#" className='link' smooth>
                        Portfolio
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="#" className='link' smooth>
                        Contact
                    </Link>
                </li>
            </ul>

            <div className="social-links">
                <p className="text">Social Media</p>
                <a href="https://www.linkedin.com/in/alvanprice/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                    <RiLinkedinBoxFill  className='linkedin'/>
                </a>
                <a href="https://github.com/404AP" target="_blank" rel="noopener noreferrer" className="github-link">
                    <RiGithubFill className='github'/>
                </a>
            </div>

        
        </div>
        

      </div>
    )
  }
}
