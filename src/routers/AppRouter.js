import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import ViewChecklistPage from '../components/ViewChecklistPage';
import AddChecklistPage from '../components/AddChecklistPage';
import EditChecklistPage from '../components/EditChecklistPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/view/:id" component={ViewChecklistPage} />
        <PrivateRoute path="/edit/:id" component={EditChecklistPage} />
        <PrivateRoute path="/add" component={AddChecklistPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
