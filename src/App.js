import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { AppBar } from './components/AppBar';
import { Home } from './screens/home/Home';
import { User } from './screens/user/User';

const App = () => {

  return <BrowserRouter>
    <AppBar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/details" component={User}/>
    </Switch>
  </BrowserRouter>
}

export default App;
