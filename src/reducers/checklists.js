//checklist reducer function

const defaultChecklistState = [];

export default (state = defaultChecklistState, action) => {
  switch (action.type) {
    case 'ADD_CHECKLIST':
      return [...state, action.newChecklist];
    case 'REMOVE_CHECKLIST':
      return state.filter(({ id }) => id !== action.checklistToRemoveId);
    case 'CLEAR_CHECKLISTS':
      return defaultChecklistState;
    case 'EDIT_CHECKLIST':
      return state.map((e) => {
        if (e.id === action.checklistUpdates.id) {
          return {
            ...e,
            items: action.checklistUpdates.items,
            name:action.checklistUpdates.name
          };
        } else {
          return e; 
        }
      });
    default:
      return state;
  }
};
