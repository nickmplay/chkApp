//checklist action generators

import moment from 'moment';

//add newChecklist object for dispatch
export const addChecklist = ({ id = moment().valueOf(), name, items = [] }) => ({
  type: 'ADD_CHECKLIST',
  newChecklist: {
    id,
    name,
    items
  }
});

//add removeChecklist object for dispatch
export const removeChecklist = (checklistToRemoveId) => ({
  type: 'REMOVE_CHECKLIST',
  checklistToRemoveId
});

//edit checklist
export const editChecklist = (checklistUpdates) => ({
  type: 'EDIT_CHECKLIST',
  checklistUpdates
});

//clear all checklists
export const clearChecklists = () => ({
  type: 'CLEAR_CHECKLISTS'
});