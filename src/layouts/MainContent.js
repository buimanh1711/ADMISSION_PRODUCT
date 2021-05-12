import { Route, Switch } from 'react-router-dom'
import Header from '../global/Header'
import About from '../pages/about'
import Client from '../pages/clients'
import Product from '../pages/products'
import Staff from '../pages/staffs'
const MainContent = () => {
  return (
    <>
      <Header />
      <div id='main-content'>
        <Switch>
          <Route path='/staffs'>
            <Staff />
          </Route>
          <Route path='/products'>
            <Product />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Client />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default MainContent