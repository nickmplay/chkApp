import React from 'react';
import { shallow } from 'enzyme';
import { ChecklistForm } from '../../components/ChecklistForm';
import checklists from '../fixtures/checklists';

//initial render
test('should render ChecklistForm correctly', () => {
  const wrapper = shallow(<ChecklistForm command="Add" />);
  expect(wrapper).toMatchSnapshot();
});

//input -> state tests
test('should set name if input changes', () => {
  const value = 'new name';
  const wrapper = shallow(<ChecklistForm command="Add" />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.state('name')).toBe(value);
});

test('should set items if textarea changes', () => {
  const value = 'first item, second item';
  const wrapper = shallow(<ChecklistForm command="Add" />);
  wrapper.find('textarea').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.state('items')).toBe(value);
});


//submit function tests
test('should handle onSubmit', () => {
  const onSubmit = jest.fn();
  const checklistToAdd = {
    name: checklists[1].name, 
    items: checklists[1].items
  };
  const wrapper = shallow(<ChecklistForm
    command="Add"
    onSubmit={onSubmit}
    checklist={checklistToAdd}
  />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper).toMatchSnapshot();
  expect(onSubmit).toHaveBeenLastCalledWith(checklistToAdd);
});

test('should handle onSubmit manual', () => {
  const onSubmit = jest.fn();
  const checklistToAdd = {
    name: checklists[1].name, 
    items: checklists[1].items
  };
  const wrapper = shallow(<ChecklistForm
    command="Add"
    onSubmit={onSubmit}
  />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value:checklistToAdd.name }
  });
  wrapper.find('textarea').at(0).simulate('change', {
    target: { value:checklistToAdd.items.join(', ') }
  });
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper).toMatchSnapshot();
  expect(onSubmit).toHaveBeenLastCalledWith({
    name: wrapper.state('name'),
    items: wrapper.state('items').split(',')
  });
});
