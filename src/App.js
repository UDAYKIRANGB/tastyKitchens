import {Switch, Route} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import ResturantDetails from './components/ResturantDetails'
import Cart from './components/Cart'
import PaymentSuccess from './components/PaymentSuccess'
import PageNotFound from './components/PageNotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/restaurant/:id" component={ResturantDetails} />
    <ProtectedRoute exact path="/cart" component={Cart} />
    <ProtectedRoute exact path="/payment-success" component={PaymentSuccess} />
    <Route component={PageNotFound} />
  </Switch>
)

export default App
