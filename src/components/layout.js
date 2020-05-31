import React from 'react'
import base from './base.css'
import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Navigation />
        <div className="container">{children}</div>
      </>
    )
  }
}

export default Template
