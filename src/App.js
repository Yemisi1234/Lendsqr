import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar/Sidebar';
import UserProfile from './components/UserProfile/UserProfile';
import UserDetails from './components/UserDetails/UserDetails';
import Signin from './components/Signin/Signin';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const mockData = require('../src/db2.json')

  const IDB = (function init() {
    let db = null;
    let objectStore = null;
    let DBOpenReq = indexedDB.open('UsersDB', 3)

    DBOpenReq.addEventListener('error', (err) => {
      
      console.warn(err);
    });
    DBOpenReq.addEventListener('success', (ev) => {

      db = ev.target.result;
      const addUser = () => {
        let tx = db.transaction('usersStore', 'readwrite');
        tx.oncomplete = (ev) => {
  
        }
        tx.onerror = (ev) => {
  
        }
        let store = tx.objectStore('usersStore');
        let request = mockData.map(user => (
          store.add(user)
        ))
  
        request.onsuccess = (ev) => {
          console.log('successfully added an object')
        }
        request.onerror = (ev) => {
          console.log('error in request to add')
        }
      }
      addUser();
      // const getReq = store.getAll()
      // console.log(getReq)
      console.log('success', db)
    });
    DBOpenReq.addEventListener('upgradeneeded', (ev) => {

      db = ev.target.result;
      if (!db.objectStoreNames.contains('usersStore')) {
        objectStore = db.createObjectStore('usersStore', {
          keyPath: 'id',
        })
      }

      
      console.log('upgrade', db)
    });

    


  })();

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
