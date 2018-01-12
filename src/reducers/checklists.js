//checklist reducer function

const defaultChecklistState = [];

export default (state = defaultChecklistState, action) => {
  switch (action.type) {
    case 'ADD_CHECKLIST':
      return [...state, action.newChecklist];
    default:
      return state;
  }
};
