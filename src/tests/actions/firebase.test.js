import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addChecklist } from '../../actions/checklists';
import { startAddChecklist, startRemoveChecklist, startEditChecklist, startSetChecklists } from '../../actions/firebase';
import checklists from '../fixtures/checklists';
import database from '../../firebase/firebase';

// pre test code
const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const checklistData = {};
  checklists.forEach(({ name, id, items }) => {
    checklistData[id] = {
      name,
      items: items.join('@@')
    };
  });
  database.ref(`users/${uid}/checklists`).set(checklistData).then(() => done());
});

// add
test('should add checklist to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const checklistToAdd = checklists[1];

  store.dispatch(startAddChecklist(checklistToAdd)).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_CHECKLIST',
      newChecklist: {
        id: actions[0].newChecklist.id,
        name: checklistToAdd.name,
        items: checklistToAdd.items
      }
    });

    return database.ref(`users/${uid}/checklists/${actions[0].newChecklist.id}`).once('value');
  }).then((snapshot) => {
    expect({
      name: snapshot.val().name,
      items: snapshot.val().items.split('@@')
    }).toEqual({
      name: checklistToAdd.name,
      items: checklistToAdd.items
    });
    done();
  });
});

// remove
test('should remove checklist and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const checklistToRemoveId = checklists[0].id;
  store.dispatch(startRemoveChecklist(checklistToRemoveId)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_CHECKLIST',
      checklistToRemoveId
    });

    return database.ref(`users/${uid}/checklists/${checklistToRemoveId}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

// edit
test('should edit checklist from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = checklists[1].id;
  const checklistUpdates = {
    id,
    name: 'new name',
    items: ['to do new', 'and this']
  };
  store.dispatch(startEditChecklist(checklistUpdates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_CHECKLIST',
      checklistUpdates
    });
    return database.ref(`users/${uid}/checklists/${id}`).once('value');
  }).then((snapshot) => {
    expect({
      id: checklistUpdates.id,
      name: snapshot.val().name,
      items: snapshot.val().items.split('@@')
    }).toEqual(checklistUpdates);
    done();
  });
});

// read
test('should read data from firebase', (done) => {
  const store = createMockStore(defaultAuthState);

  store.dispatch(startSetChecklists()).then(() => {
    const actions = store.getActions();
    
    for (let i = 0; i < checklists.length; i++) {
      expect({
        type: 'ADD_CHECKLIST',
        newChecklist: {
          id: parseInt(actions[i].newChecklist.id),
          name: actions[i].newChecklist.name,
          items: actions[i].newChecklist.items
        }
      }).toEqual({
        type: 'ADD_CHECKLIST',
        newChecklist: checklists[i]
      });
    }

    done();
  });
});