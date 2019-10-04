import * as actions from './index';
import * as types from '../constants';

describe('Currency actions', () => {

  describe('Update currency action', () => {
    it('should create an action that updates the selected currency', () => {
      const currency = 'EUR';
      const position = 'from';
      const expectedAction = {
        type: types.CURRENCY_UPDATE,
        position,
        currency
      };
      expect(actions.updateCurrency(currency, position)).toEqual(expectedAction);
    });
  });

});

describe('Ordering actions', () => {

  describe('Reverse exchange rate action', () => {
    it('should create an action that reverses the exchange rate', () => {
      const expectedAction = {
        type: types.CURRENCY_REVERSE
      };
      expect(actions.reverseCurrency()).toEqual(expectedAction);
    });
  });

});
