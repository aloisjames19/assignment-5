import React from 'react';

const Home = () => {
  return (
    <div className="home">
      
      <div className="Image-card">
          <img src={require('../assets/Images/logo333.png')} alt="Man Work" />
          <p></p>
        </div>
      <div className="hero-section">
        <h1>Welcome to Jet Electrical Shop</h1>
        <p>"Your Electrical Solution, Powered by Excellence."</p>
      </div>
      <div className="image-column">
        <div className="Image-card">
          <img src={require('../assets/Images/lights.jpg')} alt="Lights" />
          <p>Lights</p>
        </div>
        <div className="Image-card">
          <img src={require('../assets/Images/installation.jpg')} alt="Man Work" />
          <p>Our Work</p>
        </div>
        <div className="Image-card">
          <img src={require('../assets/Images/shop.jpg')} alt="Shop" />
          <p>Shop</p>
        </div>
      </div>
    </div>
  );
};

export default Home;