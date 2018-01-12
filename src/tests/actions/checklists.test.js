import { addChecklist, removeChecklist } from '../../actions/checklists';
import checklists from '../fixtures/checklists';

test('should generate addChecklist action object', () => {
  const newChecklist = checklists[0];
  const action = addChecklist(newChecklist);
  expect(action).toEqual({
    type: 'ADD_CHECKLIST',
    newChecklist
  });
});

test('should generate removeChecklist action object', () => {
  const checklistToRemoveId = checklists[0].id;
  const action = removeChecklist(checklistToRemoveId);
  expect(action).toEqual({
    type: 'REMOVE_CHECKLIST',
    checklistToRemoveId
  });
});
