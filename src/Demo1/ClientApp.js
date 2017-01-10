import React from 'react'
import { render } from 'react-dom' // gets 'render' package from react-dom

render(
    React.createElement('h1', null, 'Hello JSUpskill!!'),
    document.getElementById('app')
)
