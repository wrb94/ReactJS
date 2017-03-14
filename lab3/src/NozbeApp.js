import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import TestApp from './components/TestApp'
import DisplayTasks from './containers/DisplayTasks'
import Calendar from './components/Calendar'
import TasksPage from './pages/tasksPage'
import PriorityPage from './pages/priorityPage'
import { Provider } from 'react-redux'
import store from './store'


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={DisplayTasks} >
        <IndexRoute component={TasksPage} />
        <Route path='/na' component={PriorityPage} />
      </Route>
      <Route path='/calendar' component={Calendar} />
      <Route path='/calendar2' component={(props) => <Calendar shows={'Test prop'} />} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
