import { addChecklist, removeChecklist, editChecklist, clearChecklists } from '../../actions/checklists';
import checklists from '../fixtures/checklists';

test('should generate addChecklist action object', () => {
  const newChecklist = checklists[0];
  const action = addChecklist(newChecklist);
  expect(action).toEqual({
    type: 'ADD_CHECKLIST',
    newChecklist
  });
});

test('should generate addChecklist action object with defaults', () => {
  const newName = 'test defaults';
  const action = addChecklist({ 
    name: newName
  });
  expect(action).toEqual({
    type: 'ADD_CHECKLIST',
    newChecklist: {
      id: 0,
      name: newName,
      items: []
    }
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

test('should generate clearChecklists action object', () => {
  const action = clearChecklists();
  expect(action).toEqual({
    type: 'CLEAR_CHECKLISTS'
  });
});

test('should generate editChecklist action object', () => {
  const checklistUpdates = checklists[0];
  const action = editChecklist(checklistUpdates);
  expect(action).toEqual({
    type: 'EDIT_CHECKLIST',
    checklistUpdates
  });
});