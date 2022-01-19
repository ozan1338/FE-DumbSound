import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage"
import Pay from "./pages/Pay/Pay"
import ListTrans from './pages/ListTrans/ListTrans';
import AddArtist from './pages/AddArtist/AddArtist';
import AddMusic from "./pages/AddMusic/AddMusic"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/pay" component={Pay} exact />
        <Route path="/list-trans" component={ListTrans} exact />
        <Route path="/add-artist" component={AddArtist} exact />
        <Route path="/add-music" component={AddMusic} exact />
      </Switch>
    </Router>
  );
}

export default App;
