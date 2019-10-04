import React from 'react';
import { connect } from 'react-redux';
import './CurrencyItem.css';

// Actions
import { currencyChange } from '../../redux/actions';

export const CurrencyItem = ({ currencyType, currencyChange, position, alternative }) => (
  <li
    className="CurrencyItem"
    onClick={() => currencyChange(currencyType, position, alternative)}
  >
    {currencyType}
  </li>
);

const mapDispatchToProps = { currencyChange };

export default connect(() => ({}), mapDispatchToProps)(CurrencyItem);
