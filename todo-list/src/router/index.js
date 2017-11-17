import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoListPage from 'components/pages/TodoListPage'
import TaskDetailPage from 'components/pages/TaskDetailPage'

const Router = () => (
  <Switch>
    <Route exact path="/" component={TodoListPage} />
    <Route
      path="/tasks/:id" 
      component={TaskDetailPage} 
    />
  </Switch>
)

export default Router;