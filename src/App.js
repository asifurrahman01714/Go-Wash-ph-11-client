import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';

import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

import Book from './components/Book/Book';
import BookingList from './components/BookingList/BookingList';
import Review from './components/Dashboard/Review/Review';
import AddService from './components/AddService/AddService';
import AddAdmin from './components/AddAdmin/AddAdmin';
import Contact from './components/Home/Contact/Contact';

export const UserContext = createContext();
export const IdContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [id, setId] = useState({});
  console.log(id);
  return (
    <IdContext.Provider value={[id, setId]}>

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          
          
          <PrivateRoute path="/book">
            <Book></Book>
          </PrivateRoute>

          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>

          <Route path="/contactUs">
            <Contact></Contact>
          </Route>

          <Route path="/review">
            <Review></Review>
          </Route>

          <Route path="/service">
            <AddService></AddService>
          </Route>

          <Route path="/admin">
            <AddAdmin></AddAdmin>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    </IdContext.Provider>
  );
}

export default App;
