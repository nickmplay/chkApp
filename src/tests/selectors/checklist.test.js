import selectChecklist from '../../selectors/checklist';
import checklists from '../fixtures/checklists';

//test checklist selector
test('should return items array of known checklist', () => {
  const checklistToView = checklists[0];
  const result = selectChecklist(checklists, checklistToView);
  expect(result).toEqual( checklistToView.items );
});

test('should return false for unknown checklist', () => {
  const checklistToView = {id: 'googledegook'};
  const result = selectChecklist(checklists, checklistToView);
  expect(result).toBeFalsy();
});