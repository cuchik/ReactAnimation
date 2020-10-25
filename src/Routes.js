import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { URL } from 'helpers';
import { Main as MainLayout, RouteWithLayout } from './layouts';
import { Home as HomeView } from './containers';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path={URL.HOME()}
      />
      <Redirect to={URL.HOME()} />
    </Switch>
  );
};

export default Routes;
