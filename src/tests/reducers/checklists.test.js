import checklistReducer from '../../reducers/checklists';
import checklists from '../fixtures/checklists';

//default
test('should set default state', () => {
  const state = checklistReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

//add checklist
test('should add a checklists', () => {
  const newChecklist = checklists[0];
  const action = {
    type: 'ADD_CHECKLIST',
    newChecklist
  };
  const state = checklistReducer([], action);
  expect(state).toEqual([checklists[0]]);
});

//remove checklist
test('should remove checklist if id found', () => {
  const action = {
    type: 'REMOVE_CHECKLIST',
    checklistToRemoveId: 1
  };
  const state = checklistReducer([checklists[0]], action);
  expect(state).toEqual([]);
});

test('should not remove checklist if not id found', () => {
  const action = {
    type: 'REMOVE_CHECKLIST',
    checklistToRemoveId: 'gobbledegook'
  };
  const state = checklistReducer(checklists, action);
  expect(state).toEqual(checklists);
});

//edit checklist items
test('should edit checklist items by adding', () => {
  const checklistUpdates = checklists[1];
  checklistUpdates.items.push('rucksack 3');
  const action = {
    type: 'EDIT_CHECKLIST',
    checklistUpdates
  };
  const state = checklistReducer(checklists, action);
  expect(state).toEqual([ checklists[0], checklistUpdates, checklists[2] ]);
});

test('should edit checklist items by removing', () => {
  const checklistUpdates = checklists[1];
  checklistUpdates.items = [ checklistUpdates.items[1] ];
  const action = {
    type: 'EDIT_CHECKLIST',
    checklistUpdates
  };
  const state = checklistReducer(checklists, action);
  expect(state).toEqual([ checklists[0], checklistUpdates, checklists[2] ]);
});

test('should edit checklist name', () => {
  const checklistUpdates = checklists[1];
  checklistUpdates.name = 'new name';
  const action = {
    type: 'EDIT_CHECKLIST',
    checklistUpdates
  };
  const state = checklistReducer(checklists, action);
  expect(state).toEqual([ checklists[0], checklistUpdates, checklists[2] ]);
});

test('should not edit checklist items if id not found', () => {
  const checklistUpdates = {
    name: 'doesnt exist',
    id: 'googledegook', 
    items: ['wont be doing this', 'or this either']
  };
  const action = {
    type: 'EDIT_CHECKLIST',
    checklistUpdates
  };
  const state = checklistReducer(checklists, action);
  expect(state).toEqual(checklists);
});