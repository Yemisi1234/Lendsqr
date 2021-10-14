import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar/Sidebar';
import UserProfile from './components/UserProfile/UserProfile';
import UserDetails from './components/UserDetails/UserDetails';
import Signin from './components/Signin/Signin';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const mockData = require('../src/db.json')


  const IDB = (function init() {
    let db = null;
    let objectStore = null;
    let DBOpenReq = indexedDB.open('UsersDB', 5)

    DBOpenReq.addEventListener('error', (err) => {
      
      console.warn(err);
    });
    DBOpenReq.addEventListener('success', (ev) => {

      db = ev.target.result;
      console.log('success', db)
      if (typeof mockData !== 'undefined') {
        let tx = makeTX('usersStore', 'readwrite');
        tx.oncomplete = (ev) => {
          console.log('finished adding the data');
          builList()
        }
        let store = tx.objectStore('usersStore')
        let request = store.getAll();
        // to delete data from store, we use
        // let request = store.delete .deleteIndex or .clear() for all
        request.onsuccess = (ev) => {
          if(ev.target.result.length === 0) {
            // or ev.target.length !== mockData.length
            mockData.forEach(obj => {
              let req = store.add(obj)
              req.onsuccess = (ev) => {
                console.log('added an object')
              }
              // tx.abort() if you want to kill a transaction
              req.onerror = (err) => {
                console.warn(err);
              }
            })
          }
        }
      } else {
        builList()
      }
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

    const builList = () => {
      let tx = makeTX('usersStore', 'readonly')
      let store = tx.objectStore('usersStore');
      let getReq = store.getAll();
      getReq.onsuccess = (ev) => {
        let request = ev.target; // request is the same as getReq
        console.log({request});
      }
    }

    const makeTX = (storeName, mode) => {
      let tx = db.transaction(storeName, mode);

      return tx;
    }
  })();

  async function dbData() {
    let data = await IDB();
    console.log(data)
  }


  return (
    <Router>
      <Switch>
        <ScrollToTop>
          <Route exact path="/" component={Signin}></Route>
          <Route path="/users" component={UserProfile} />
          <Route path="/user/:id" component={UserDetails} />
        </ScrollToTop>
      </Switch>
    </Router>
  );
}

export default App;
