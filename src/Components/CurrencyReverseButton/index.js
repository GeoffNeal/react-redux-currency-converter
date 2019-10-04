import React from 'react';
import { connect } from 'react-redux';
import './CurrencyReverseButton.css';

// Actions
import { reverseCurrency } from '../../redux/actions';

// Assets
import exchangeIcon from './exchange-arrows.svg';

export const CurrencyReverseButton = ({ reverseCurrency }) => (
  <button onClick={reverseCurrency} className="CurrencyReverseButton">
    <img src={exchangeIcon} />
  </button>
);

const mapDispatchToProps = { reverseCurrency };

export default connect(() => ({}), mapDispatchToProps)(CurrencyReverseButton);
