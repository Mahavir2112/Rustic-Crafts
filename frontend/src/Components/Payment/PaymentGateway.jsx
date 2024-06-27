import React, { useState } from 'react';
import './style.css';

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement payment processing logic using your chosen gateway's library
    console.log('Payment details submitted:', {
      cardNumber,
      expiryDate,
      cvv,
      name,
      address,
      city,
      state,
      zip,
    });
  };

  return (
    <div className="container">
      <h1>Secure Payment</h1>
      <p>Please enter your payment details to complete your purchase.</p>
      <form onSubmit={handleSubmit}>
        <div className="payment-details">
          <label htmlFor="card-number">Card Number:</label>
          <input
            type="text"
            className='number'
            id="card-number"
            name="card-number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          <label htmlFor="expiry-date">Expiry Date (MM/YY):</label>
          <input
            type="text"
            id="expiry-date"
            name="expiry-date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <div className="billing-address">
          <label htmlFor="name">Name on Card:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
          <label htmlFor="zip">Zip Code:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentGateway;
