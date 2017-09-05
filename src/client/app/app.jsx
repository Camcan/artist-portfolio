import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout.jsx';
import './css/normalize.css';
import './css/base.css';

export default class App extends Component {
   constructor(props){
      super(props)
   }
   render () {
      return (
            <Layout>  
               <div style={{zIndex: 2}}>
               <Switch>
                  <Route exact path="/">
                     <p>HELLO WORLD</p>
                  </Route>
               </Switch>
               </div>
            </Layout>
      )
   }
}
