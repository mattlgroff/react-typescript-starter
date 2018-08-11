import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import HeaderProgress from './HeaderProgress';

enzyme.configure({ adapter: new Adapter() });

describe('HeaderProgress Component', () => {
  it('renders 1 active when passed 1', () => {
    const progress = enzyme.shallow(<HeaderProgress progress={1} />);
    expect(progress.find('.active').text()).toEqual('1');
    expect(
      progress
        .find('.inactive')
        .at(0)
        .text(),
    ).toEqual('2');
    expect(
      progress
        .find('.inactive')
        .at(1)
        .text(),
    ).toEqual('3');
  });

  it('renders 2 active when passed 2', () => {
    const progress = enzyme.shallow(<HeaderProgress progress={2} />);
    expect(progress.find('.active').text()).toEqual('2');
    expect(
      progress
        .find('.inactive')
        .at(0)
        .text(),
    ).toEqual('1');
    expect(
      progress
        .find('.inactive')
        .at(1)
        .text(),
    ).toEqual('3');
  });

  it('renders 3 active when passed 3', () => {
    const progress = enzyme.shallow(<HeaderProgress progress={3} />);
    expect(progress.find('.active').text()).toEqual('3');
    expect(
      progress
        .find('.inactive')
        .at(0)
        .text(),
    ).toEqual('1');
    expect(
      progress
        .find('.inactive')
        .at(1)
        .text(),
    ).toEqual('2');
  });
});
