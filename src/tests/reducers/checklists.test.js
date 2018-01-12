import checklistReducer from '../../reducers/checklists';
import checklists from '../fixtures/checklists';

test('should set default state', () => {
  const state = checklistReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add a checklists', () => {
  const newChecklist = checklists[0];
  const action = {
    type: 'ADD_CHECKLIST',
    newChecklist
  };
  const state = checklistReducer([], action);
  expect(state).toEqual([checklists[0]]);
});