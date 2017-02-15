import React from 'react'
import NavLink from './utils/NavLink'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.any
  },

  render () {
    return (
      <div className='mainApp'>
        <div className='navbar'>
          <nav>
            <NavLink to='/' onlyActiveOnIndex>Main</NavLink>
            <NavLink to='/tasks'>Tasks</NavLink>
            <NavLink to='/calendar'>Kalendarz</NavLink>
          </nav>
        </div>

        <div className='tasksList'>
          {this.props.children}
        </div>
      </div>
    )
  }
})
