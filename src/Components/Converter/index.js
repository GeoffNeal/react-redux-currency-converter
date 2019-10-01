import React from 'react';
import './Converter.css';

// Components
import CurrencyBox from '../CurrencyBox';

// Assets
import exchangeIcon from './exchange-arrows.svg';

const Converter = () => {
  return (
    <div className="Converter">
      <h1 className="Converter__header">Currency Converter</h1>
      <div className="Converter__input-container">
        <CurrencyBox />
        <img src={exchangeIcon} className="Converter__exchange-button" />
        <CurrencyBox />
      </div>
    </div>
  );
};

export default Converter;
