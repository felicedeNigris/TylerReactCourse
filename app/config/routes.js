const React = require('react')
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const IndexRoute = ReactRouter.IndexRoute
const hashHistory = ReactRouter.hashHistory
//components
const Main = require('../components/Main')
const Home = require('../components/Home')

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home}/>
    </Route>
  </Router>
)

module.exports = routes
