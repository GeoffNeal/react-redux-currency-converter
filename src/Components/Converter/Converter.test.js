import React from 'react';
import { shallow } from 'enzyme';

import Converter from './index';

describe('Converter', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Converter />);
    expect(wrapper).toHaveLength(1);
  });
});
