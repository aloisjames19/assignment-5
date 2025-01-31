import React from 'react';
import myPics from '../assets/Images/my_pics.jpg';
import mySgoop from '../assets/Images/my_sgoop.jpg';
import lightee from '../assets/Images/lightee.jpg';
import lights from '../assets/Images/lights.jpg';
import mcb from '../assets/Images/mcb.PNG';
import shop from '../assets/Images/shop.jpg';
import svolt from '../assets/Images/svolt.PNG';
import cablesss from '../assets/Images/cablesss.PNG';
import panelbox from '../assets/Images/panelbox.PNG';

const MyProjects = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <div className="shop-grid">
        <div className="product">
          <img src={myPics} alt="Product 1" />
          <h2>Solar Panels</h2>
          <p>Price: $200.00</p>
          <button>Buy</button>
        </div>
        <div className="product">
          <img src={mySgoop} alt="Product 2" />
          <h2>Cables and Accessories</h2>
          <p>Price: $9.99</p>
          <button>Buy</button>
        </div>
        <div className="product">
          <img src={lightee} alt="Product 3" />
          <h2>Solar Lights</h2>
          <p>Price: $12.99</p>
          <button>Buy</button>
        </div>
        <div className="product">
          <img src={lights} alt="Product 4" />
          <h2>Sensor Lights</h2>
          <p>Price: $25.99</p>
          <button>Buy</button>
        </div>
        <div className="product">
          <img src={mcb} alt="Product 5" />
          <h2>Circuit Breaker</h2>
          <p>Price: $29.99</p>
          <button>Buy</button>
        </div>
        <div className="product">
          <img src={shop} alt="Product 6" />
          <h2>Shop</h2>
          <p>Price: $60.99</p>
          <button>Buy</button>
        </div>
        <div className="product">
          <img src={svolt} alt="Product 7" />
          <h2>Lithium Battery 48V</h2>
          <p>Price: $400.99</p>
          <button>Buy</button>
        </div>
        <div className="product">
          <img src={cablesss} alt="Product 8" />
          <h2>Cables</h2>
          <p>Price: $30.99</p>
          <button>Buy</button>
        </div>
        <div className="product">
          <img src={panelbox} alt="Product 9" />
          <h2>Panel BD Box</h2>
          <p>Price: $100.99</p>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;

