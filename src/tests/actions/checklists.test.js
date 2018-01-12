import { addChecklist } from '../../actions/checklists';
import checklists from '../fixtures/checklists';

test('should generate addChecklist action object', () => {
  const newChecklist = checklists[0];
  const action = addChecklist(newChecklist);
  expect(action).toEqual({
    type: 'ADD_CHECKLIST',
    newChecklist
  });
});


