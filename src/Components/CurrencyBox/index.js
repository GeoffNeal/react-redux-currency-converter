import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CurrencyBox.css';

// Actions
import { valueChange } from '../../redux/actions';

// Components
import CurrencySelect from '../CurrencySelect';

export class CurrencyBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { position, alternative } = this.props;
    this.props.valueChange(position, alternative, parseFloat(e.target.value));
  }

  render() {
    const { currency, exchangeRate, position, alternative } = this.props;
    return (
      <div className="CurrencyBox">
        { !exchangeRate.error ? (
          <span className="CurrencyBox__rate">
            {`1 ${currency[position]} = ${exchangeRate[position]} ${currency[alternative]}`}
          </span>
        ) : (
          <span className="CurrencyBox__rate--error">
            There was an issue getting the exchange rate
          </span>
        )}
        <CurrencySelect position={position} alternative={alternative} />
        <input
          name={position}
          type="number"
          className="CurrencyBox__input"
          value={currency.values[position]}
          onChange={this.handleChange}
        />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    currency: state.currency,
    exchangeRate: state.exchangeRate
  }
};

const mapDispatchToProps = { valueChange };

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyBox);
