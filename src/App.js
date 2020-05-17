import React, { Fragment, Component } from 'react';
import './App.css';
import NAV from './components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from 'react-router';
import HOME from './components/home';;

function App(){
  return (
    <Fragment>
        <NAV/>
    </Fragment>
  );
}
export default App;
