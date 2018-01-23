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
  const editChecklist = jest.fn();
  const history = { push: jest.fn() };
  const checklistToEdit = {
    name: checklists[1].name,
    items: checklists[1].items
  };
  const wrapper = shallow(<EditChecklistPage
    onSubmit={onSubmit}
    editChecklist={editChecklist}
    history={history}
    checklist={checklistToEdit}
  />);

  wrapper.find('ChecklistForm').prop('onSubmit')(checklistToEdit);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editChecklist).toHaveBeenLastCalledWith(checklistToEdit);
});