import React from 'react';
import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>© 2024 Amazon Clone</div>
        <div>
          <a href="#about">About</a> | <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
