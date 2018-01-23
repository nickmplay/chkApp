import React from 'react';
import { shallow } from 'enzyme';
import { AddChecklistPage } from '../../components/AddChecklistPage';
import checklists from '../fixtures/checklists';

//initial render
test('should render AddChecklistPage correctly', () => {
  const wrapper = shallow(<AddChecklistPage />);
  expect(wrapper).toMatchSnapshot();
});

//test onSubmit
test('should call AddChecklistPage onSubmit', () => {
  const onSubmit = jest.fn();
  const addChecklist = jest.fn();
  const history = { push: jest.fn() };
  const checklistToAdd = {
    name: checklists[1].name, 
    items: checklists[1].items
  };
  const wrapper = shallow(<AddChecklistPage
    onSubmit={onSubmit}
    addChecklist={addChecklist}
    history={history}
  />);

  wrapper.find('ChecklistForm').prop('onSubmit')(checklistToAdd);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addChecklist).toHaveBeenLastCalledWith(checklistToAdd);
});