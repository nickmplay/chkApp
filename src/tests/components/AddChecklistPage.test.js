import React from 'react';
import { shallow } from 'enzyme';
import { AddChecklistPage } from '../../components/AddChecklistPage';
import checklists from '../fixtures/checklists';

//initial render
test('should render AddChecklistPage correctly', () => {
  const wrapper = shallow(<AddChecklistPage />);
  expect(wrapper).toMatchSnapshot();
});

//input -> state tests
test('should set name if input changes', () => {
  const value = 'new name';
  const wrapper = shallow(<AddChecklistPage />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.state('name')).toBe(value);
});

test('should set items if textarea changes', () => {
  const value = 'first item, second item';
  const wrapper = shallow(<AddChecklistPage />);
  wrapper.find('textarea').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.state('items')).toBe(value);
});

//submit function tests
test('should handle onSubmit', () => {
  const addChecklist = jest.fn();
  const history = { push: jest.fn() };
  const checklistToAdd = {
    name: checklists[1].name, 
    items: checklists[1].items
  };
  const wrapper = shallow(<AddChecklistPage
    addChecklist={addChecklist}
    history={history}
    checklist={checklistToAdd}
  />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper).toMatchSnapshot();
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addChecklist).toHaveBeenLastCalledWith(checklistToAdd);
});

test('should handle onSubmit manual', () => {
  const onSubmit = jest.fn();
  const addChecklist = jest.fn();
  const history = { push: jest.fn() };
  const checklistToAdd = checklists[1];
  const wrapper = shallow(<AddChecklistPage
    addChecklist={addChecklist}
    history={history}
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
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addChecklist).toHaveBeenLastCalledWith({
    name: wrapper.state('name'),
    items: wrapper.state('items').split(',')
  });
});

// onSubmit = (expense) => {
//   this.props.startAddExpense(expense);
//   this.props.history.push('/');
// };