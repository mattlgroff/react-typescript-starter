import * as enzyme from 'enzyme';
import * as React from 'react';
import HeaderProgress from './HeaderProgress';

it('renders the correct text when no enthusiasm level is given', () => {
  const progress = enzyme.shallow(<HeaderProgress progress={1} />);
  expect(progress.find('.active').text()).toEqual('1');
});
