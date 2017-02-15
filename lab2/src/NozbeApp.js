import React from 'react'
import { render } from 'react-dom'
import { Route, Router, browserHistory } from 'react-router'
import Calendar from './Calendar.js'
import Tasks from './Tasks.js'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Calendar} />
    <Route path='/tasks' component={Tasks} />
  </Router>,
  document.getElementById('app')
)
