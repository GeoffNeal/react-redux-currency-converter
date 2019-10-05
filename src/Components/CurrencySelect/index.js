import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import './CurrencySelect.css';

// Actions
import { openCurrencyMenu } from '../../redux/actions';

// Assets
import downArrow from './arrow-down.svg';

// Components
import CurrencyItem from '../CurrencyItem';

export const CurrencySelect = ({ currency, position, alternative, openCurrencyMenu }) => {
  const menuClasses = classnames("CurrencySelect__menu", {
    "CurrencySelect__menu--open": currency.menuOpen[position]
  });
  return (
    <>
      <div className="CurrencySelect__header" onClick={() => openCurrencyMenu(position)}>
        <h4>{currency[position]}</h4>
        <img className="CurrencySelect__arrow" src={downArrow} alt="Toggle currency menu" />
      </div>
      <ul className={menuClasses}>
        {currency.types.list.map((currencyType, i) => (
          <CurrencyItem
            key={`${currencyType}_${i}`}
            position={position}
            alternative={alternative}
            currencyType={currencyType}
          />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => {
  return {
    currency: state.currency
  };
};

const mapDispatchToProps = { openCurrencyMenu };

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelect);
