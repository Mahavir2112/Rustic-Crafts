import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/Offer.webp';

const Offers = () => {
  const navigate = () => {
    window.location.href = "http://localhost:3000/mens";
  };

  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button onClick={navigate}>Check Now</button> {/* Call navigate function */}
      </div>
      <div className="offers-right">
        <img className='offer' src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
