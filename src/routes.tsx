import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import DevsList from './pages/DevsList'
import DevForm from './pages/DevForm'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
      <Route path="/quero-um-brodev" component={DevsList} />
      <Route path="/quero-ser-um-brodev" component={DevForm} />
    </BrowserRouter>
  )
}

export default Routes
