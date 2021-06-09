import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
//componentes
import {Menu} from './components/Menu';
import {Footer} from './components/Footer';
import {MenuMovil} from './components/MenuMovil';
//paginas
import Home from './pages/Home';
import About from './pages/About';
import Contactos from './pages/Contact';

export default function App() {
  return(
    <Router>
    <Menu />
    <MenuMovil/>
    <Switch>
      <Route path = '/' exact> <Home/> </Route>
      <Route path = '/About'exact> <About/> </Route>
      <Route path = '/contact'exact> <Contactos/> </Route>
    </Switch>
    <Footer />
    </Router>
  )
}