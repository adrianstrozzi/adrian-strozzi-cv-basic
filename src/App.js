import MainNavbar from "./components/Navbar/MainNavbar";
import Home from "./components/Home";
import Study from "./components/Study";
import Work from "./components/Work";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <MainNavbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/study' component={Study} />
        <Route path='/work' component={Work} />
      </Switch>
    </div>
  );
}

export default App;