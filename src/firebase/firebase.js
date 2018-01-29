import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

//firebase playground
//push data onto user branch
// database.ref(`users/test-id/checklists`).push({
//   name: 'checklist-name',
//   id: 12,
//   items: 'item1@@item2'
// }).then((ref) => {
//   database.ref(`users/test-id/checklists/${ref.key}`)
//   .once('value')
//   .then((snapshot) => {
//     const dataRetrieve1 = [];
//     const dataRetrieve3 = {};
//     console.log(snapshot.val());

//     snapshot.forEach((childSnapshot) => {
//       dataRetrieve1.push({
//         id: childSnapshot.key,
//         value: childSnapshot.val()
//       });
//       dataRetrieve3[childSnapshot.key] = childSnapshot.val();
//     });
//     console.log(dataRetrieve1);
//     console.log(dataRetrieve3);
//   });
// });

//read data from fb and reformat using firebase id
// database.ref(`users/test-id/checklists/`)
//   .once('value')
//   .then((snapshot)=>{
//     console.log(snapshot.val());
//     const dataAll = [];
//     snapshot.forEach((child)=>{
//       dataAll.push({
//         fbid: child.key,
//         ...child.val()
//       });
//     });
//     console.log(dataAll);
//   });