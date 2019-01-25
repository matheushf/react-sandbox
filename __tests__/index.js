import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Welcome from '../src/app/components/welcome.jsx';
import List from '../src/app/components/list';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Add from '../src/app/components/add';

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

  it('List renders column', () => {
    const arr = list.find('th');
    expect(arr.length).toEqual(1);
    expect(arr.first().text()).toEqual('Name');
  });

  it('List renders data', () => {
    const arr = list.find('td');
    expect(arr.length).toEqual(3);
    expect(arr.at(1).text()).toEqual('Name 2');
  });
});

describe('Add', () => {
  let add;
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();
    add = mount(<Add onAdd={onAdd} />);
  });

  it('Add requires onAdd prop', () => {
    expect(add.props().onAdd).toBeDefined();
  });

  it('Add renders button', () => {
    const button = add.find('button').first();
    expect(button).toBeDefined();    
  });

  it('Button click calls onAdd', () => {
    const button = add.find('button').first();
    const input = add.find('input').first();
    input.simulate('change', {target: {value: 'Name 4'}});
    button.simulate('click');
    expect(onAdd).toBeCalledWith('Name 4');
  })
});
