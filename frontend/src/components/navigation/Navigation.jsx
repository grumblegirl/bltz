import React, { useState, useEffect } from 'react';
import './Navigation.css';
import shieldLogo from '../../assets/shield_logo.png';

const Navigation = () => {
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.main-hero');
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setOnDark(heroBottom > 60);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${onDark ? 'nav-dark' : 'nav-light'}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={shieldLogo} alt="Bltz AI" className="logo-icon" />
          <span className="logo-text">Bltz AI</span>
        </div>
        
        <div className="nav-links">
          <div className="nav-item">
            <span>Platform</span>
            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="nav-item">
            <span>Resources</span>
            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="nav-item">
            <span>Use Cases</span>
            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="nav-item">
            <span>Company</span>
            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="nav-actions">
          <a href="#" className="sign-in">Free Trial</a>
          <button className="get-demo">Get Demo</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
