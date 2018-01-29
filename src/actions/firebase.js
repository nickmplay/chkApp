import { addChecklist, removeChecklist, editChecklist } from './checklists';
import database from '../firebase/firebase';

// Create
export const startAddChecklist = (checklist) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const checklistToAdd = { name: checklist.name, items: checklist.items.join('@@') };

    return database.ref(`users/${uid}/checklists`).push(checklistToAdd).then((ref) => {
      dispatch(addChecklist({
        id: ref.key,
        name: checklist.name,
        items: checklist.items
      }));
    });
  };
};

// Delete
export const startRemoveChecklist = (checklistToRemoveId) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/checklists/${checklistToRemoveId}`).remove().then(() => {
      dispatch(removeChecklist(checklistToRemoveId));
    });
  };
};

// Update
export const startEditChecklist = (checklistUpdates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const fbChecklistUpdates = {
      name: checklistUpdates.name,
      items: checklistUpdates.items.join('@@')
    };
    return database.ref(`users/${uid}/checklists/${checklistUpdates.id}`).update(fbChecklistUpdates).then(() => {
      dispatch(editChecklist(checklistUpdates));
    });
  };
};

// Read
export const startSetChecklists = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/checklists`).once('value').then((snapshot) => {
      const checklists = [];

      snapshot.forEach((childSnapshot) => {
        checklists.push({
          id: childSnapshot.key,
          name: childSnapshot.val().name,
          items: childSnapshot.val().items.split('@@')
        });
      });

      checklists.forEach((checklist) => {
        dispatch(addChecklist(checklist));
      });
    });
  };
};