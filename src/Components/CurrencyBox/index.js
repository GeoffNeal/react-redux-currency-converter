import React from 'react';
import './CurrencyBox.css';

const CurrencyBox = () => {
  return (
    <>
    <div className="CurrencyBox">
      <span className="CurrencyBox__rate">Exchange rate</span>
      <div className="CurrencyBox__header">
        <h4>Currency Type</h4>
      </div>
      <input className="CurrencyBox__input" />
    </div>
    </>
  );
};

export default CurrencyBox;
