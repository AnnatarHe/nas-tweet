import Container from './pages/Container'
import About from './pages/About/About'
import Search from './pages/Search/Search'

const routes = {
  path: '/',
  component: Container,
  indexRoute: { component: Search },
  childRoutes: [
    { path: 'about', component: About },
    {
      path: '/',
      component: Search
    }
  ]
}

export default routes
