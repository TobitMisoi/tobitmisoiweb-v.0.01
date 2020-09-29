

import React from 'react';

import Contact from './pages/contact.js';
import Contac from './pages/phase_two_contact.js';

// import { response } from '../../api/express-backend/server';
// import SuiRuiToggleBtn from './Function/toggle_btn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import { Services } from './pages/services.js';


class App extends React.Component {
  render() {

    return(
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/phasetwocontact" component={Contac} />
            <Route strict exact path="/about"></Route>
            <Route path={`/contact${`:id`}`}></Route>
            <Route path="/service" component={Services}></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
        </Router>

    );
  }
}
export default App;
