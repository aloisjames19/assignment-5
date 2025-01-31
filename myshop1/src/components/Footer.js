
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram" />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-google" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-whatsapp" />
        </a>
      </div>
      <p>&copy; 2023 My Electrical Shop</p>
    </footer>
  );
};

export default Footer;