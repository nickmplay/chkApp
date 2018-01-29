import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { addChecklist, clearChecklists } from './actions/checklists'
import { startSetChecklists } from './actions/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
//initiase store with dummy data
// store.dispatch(addChecklist({
//   name: 'start up',
//   id: 12,
//   items: ['build site', 'test site']
// }));
// store.dispatch(addChecklist({
//   name: 'make lunch',
//   id: 14,
//   items: ['get milk', 'get shake']
// }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// enable firebase auth for routes
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetChecklists()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    store.dispatch(clearChecklists());
    renderApp();
    history.push('/');
  }
});

// offline usage setting auth 
// store.dispatch(login('dev-uid'));
// renderApp();