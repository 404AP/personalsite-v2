import React, { useEffect, useState, useRef } from 'react';
import {
  RiMenu3Line,
  RiCloseFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from 'react-icons/ri/';
import { SiFiverr } from 'react-icons/si/';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

export default function Navbar() {
  const [navbar, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef();

  const handleToggle = () => setNav((navbar) => !navbar);
  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition((scrollPosition) => position);
  };
  const checkOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      setNav((navbar) => false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', checkOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', checkOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={
        'navbar-container ' +
        (navbar ? 'isOpen' : 'isClosed') +
        (scrollPosition > 0.85 * window.innerHeight ? '' : ' not-visible')
      }
    >
      <div className="nav-icon-closed">
        <RiMenu3Line
          onClick={handleToggle}
          className={'open ' + (navbar ? 'not-visible' : '')}
          style={{ color: '#67ba43' }}
        />
      </div>
      <div className="nav-icon-open">
        <RiCloseFill
          onClick={handleToggle}
          className={'close ' + (navbar ? '' : 'not-visible')}
        />
      </div>
      <div className={'drawer ' + (navbar ? '' : 'not-visible')}>
        <ul className="menu-options">
          <li className="menu-item">
            <Link to="#" className="link" smooth>
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="#aboutMe" className="link" smooth>
              About Me
            </Link>
          </li>
          <li className="menu-item">
            <Link to="#portfolio" className="link" smooth>
              Portfolio
            </Link>
          </li>
          <li className="menu-item">
            <Link to="#contact" className="link" smooth>
              Contact
            </Link>
          </li>
        </ul>

        <div className="social-links">
          <p className="text">Social Media</p>
          <a
            href="https://www.linkedin.com/in/alvanprice/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <RiLinkedinBoxFill className="linkedin" />
          </a>
          <a
            href="https://github.com/404AP"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <RiGithubFill className="github" />
          </a>
          <a
            href="https://www.fiverr.com/s2/ecdace30a8"
            target="_blank"
            rel="noopener noreferrer"
            className="fiverr-link"
          >
            <SiFiverr className="fiverr" />
          </a>
        </div>
      </div>
    </div>
  );
}
