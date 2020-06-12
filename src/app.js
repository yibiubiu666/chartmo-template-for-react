import React from "react"

import { goPath } from '@/utils/location'

import styles from './app.less'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount () {
    if (window.location.hash === '#/') {
      goPath('/home')
    }
  }

  render () {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}
