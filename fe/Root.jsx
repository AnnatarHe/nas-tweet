import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import routes from './routes'
import './styles/index.styl'

const Root = () => {
    return (
      <Router routes={routes} history={browserHistory} />
    )
}

export default Root
