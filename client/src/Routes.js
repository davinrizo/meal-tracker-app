import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { homePage } from './home';
import { addIngredientPage } from './ingredients';
import { recipeSearchPage } from './recipes';
import { shoppingListPage } from './shopping-list';

const routes = [
  {
    path: '/',
    Component: homePage,
    exact: true,
  },
  {
    path: '/add-ingredient',
    Component: addIngredientPage,
  },
  {
    path: '/recipes',
    Component: recipeSearchPage,
  },
  {
    path: '/shopping-list',
    Component: shoppingListPage,
  },
];

export const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact}>
          <route.Component />
        </Route>
      ))}
    </Switch>
  </Router>
);
