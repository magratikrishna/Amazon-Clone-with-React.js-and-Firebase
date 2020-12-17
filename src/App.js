import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
// import { loadStrip, loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js"

// const promise = loadStripe(
//   'pk_test_51HoW11IOOmI0yvrnMJufWlR0c6goEZhFKODnGbQBGE7vSm6ZJBZHRCTYcGvwRATJcHExgIBctUPkgEpf9ydePPiw00wIal34yC'
// );

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser) {
        //the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/payment">
          <Header />
            <Payment />
        </Route>
        <Route path="/orders">
          <Header />
            <Orders />
        </Route>
        {/* This is the default Route */}
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
