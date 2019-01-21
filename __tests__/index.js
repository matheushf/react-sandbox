import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Welcome from '../src/app/components/welcome.jsx';
import List from '../src/app/components/liist';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Welcome (Snapshot)', () => {
  it('Welcome renders hello world', () => {
    const component = renderer.create(<Welcome />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('Welcome', () => {
  it('Welcome renders hello world', () => {
    const welcome = shallow(<Welcome />);
    expect(welcome.find('div').text()).toEqual('Hello world');
  });
});

describe('List', () => {
  let list;

  beforeEach(() => {
    list = shallow(<List data={['Name 1', 'Name 2', 'Name 3']} />);
  });

  it('List renders table', () => {
    expect(list.find('table').length).toEqual(1);
  });
  
  it('Class of rendered table', () => {
    expect(list.find('.myClass').length).toEqual(1);
  });
});
