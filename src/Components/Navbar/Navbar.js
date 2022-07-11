import React, { Component, useEffect, useState } from 'react';
import { RiMenu3Line, RiCloseFill, RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri/";
import {HashLink as Link} from "react-router-hash-link";
import './Navbar.css';


export default function Navbar() {

    const[navbar, setNav] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [color,setColor] = useState("#67ba43");

    const handleToggle = () => setNav((navbar) => !navbar);
    const handleScroll = () => {
        const position = window.pageYOffset;
        
        setScrollPosition((scrollPosition) => position );
      };

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);



  return (
        <div className={"navbar-container " + (navbar ? 'isOpen': 'isClosed') + (scrollPosition > (0.75 * window.innerHeight) ? '' : ' not-visible')}>
        <div className="nav-icon-closed">
            <RiMenu3Line onClick={handleToggle} className={'open ' + (navbar ? 'not-visible': '')} style={{color: color}}/>
        </div>
        <div className="nav-icon-open">
            <RiCloseFill onClick={handleToggle} className={'close ' + (navbar ? '' : 'not-visible') }/>
        </div>
        <div className={"drawer " + (navbar ? '' : 'not-visible')}>
            <ul className="menu-options">
                <p className="t" style={{color: 'white'}}> {scrollPosition} </p>
                <li className="menu-item">
                    <Link to="#" className='link' smooth>
                        Home
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="#aboutMe" className='link' smooth>
                        About Me
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="#portfolio" className='link' smooth>
                        Portfolio
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="#contact" className='link' smooth>
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

