//checklist reducer function

const defaultChecklistState = [];

export default (state = defaultChecklistState, action) => {
  switch (action.type) {
    case 'ADD_CHECKLIST':
      return [...state, action.newChecklist];
    case 'REMOVE_CHECKLIST':
      return state.filter(({ id }) => id !== action.checklistToRemoveId);;
    default:
      return state;
  }
};
