//checklist action generators

//add newChecklist object for dispatch
export const addChecklist = (newChecklist) => ({
  type: 'ADD_CHECKLIST',
  newChecklist
});

//add removeChecklist object for dispatch
export const removeChecklist = (checklistToRemoveId) => ({
  type: 'REMOVE_CHECKLIST',
  checklistToRemoveId
});