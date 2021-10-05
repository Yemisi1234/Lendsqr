import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar/Sidebar';
import UserProfile from './components/UserProfile/UserProfile';
import UserDetails from './components/UserDetails/UserDetails';
import Signin from './components/Signin/Signin';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
        {/* <Sidebar /> */}
      <Switch>
        <ScrollToTop>
          <Route exact path="/" component={Signin}></Route>
          <Route path="/users" component={UserProfile} />
          {/* <Route path="/user-details" component={UserDetails} /> */}
          <Route path="/user/:id" component={UserDetails} />
        </ScrollToTop>
      </Switch>
    </Router>
  );
}

export default App;
