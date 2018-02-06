import React from 'react';
import { shallow } from 'enzyme';
import { EditChecklistPage } from '../../components/EditChecklistPage';
import checklists from '../fixtures/checklists';

//initial render
test('should render EditChecklistPage correctly', () => {
  const wrapper = shallow(<EditChecklistPage
    checklist={checklists[0]}
  />);
  expect(wrapper).toMatchSnapshot();
});

//test onSubmit
test('should call EditChecklistPage onSubmit', () => {
  const onSubmit = jest.fn();
  const startEditChecklist = jest.fn();
  const history = { push: jest.fn() };
  const checklistToEdit = {
    name: checklists[1].name,
    items: checklists[1].items
  };
  const wrapper = shallow(<EditChecklistPage
    onSubmit={onSubmit}
    startEditChecklist={startEditChecklist}
    history={history}
    checklist={checklistToEdit}
  />);

  wrapper.find('ChecklistForm').prop('onSubmit')(checklistToEdit);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditChecklist).toHaveBeenLastCalledWith(checklistToEdit);
});

//test onRemove 
test('should call onRemove and implement', () => {
  const onRemove = jest.fn();
  const startRemoveChecklist = jest.fn();
  const history = { push: jest.fn() };
  const confirm = jest.spyOn(window, 'confirm')
  confirm.mockReturnValueOnce(true);
  const checklistToRemove = checklists[1];
  const wrapper = shallow(<EditChecklistPage
    onRemove={onRemove}
    startRemoveChecklist={startRemoveChecklist}
    history={history}
    checklist={checklistToRemove}
  />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('button').simulate('click');
  expect(confirm).toHaveBeenCalled();
  expect(startRemoveChecklist).toHaveBeenLastCalledWith(checklistToRemove.id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should call onRemove and not implement', () => {
  const onRemove = jest.fn();
  const startRemoveChecklist = jest.fn();
  const history = { push: jest.fn() };
  const confirm = jest.spyOn(window, 'confirm');
  confirm.mockReturnValueOnce(false);
  const checklistToRemove = checklists[1];
  const wrapper = shallow(<EditChecklistPage
    onRemove={onRemove}
    startRemoveChecklist={startRemoveChecklist}
    history={history}
    checklist={checklistToRemove}
  />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('button').simulate('click');
  expect(confirm).toHaveBeenCalled();
  expect(startRemoveChecklist).not.toHaveBeenCalled();
  expect(history.push).not.toHaveBeenCalled();
});