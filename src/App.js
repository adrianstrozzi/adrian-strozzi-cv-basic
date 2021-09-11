import MainNavbar from "./components/Navbar/MainNavbar";
import Home from "./components/Home";
import Study from "./components/Study";
import Work from "./components/Work";
import Other from "./components/Other";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <MainNavbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/work' component={Work} />
        <Route path='/study' component={Study} />
        <Route path='/other' component={Other} />
      </Switch>
    </div>
  );
}

export default App;