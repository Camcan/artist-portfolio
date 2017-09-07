import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout.jsx';
import Header from './components/header/index.jsx';
import Content from './components/content.jsx';
import ArtContainer from './components/art/index.jsx';
import Gallery from './components/art/gallery.jsx';
import './css/normalize.css';
import './css/base.css';

export default class App extends Component {
   constructor(props){
      super(props)
   }
   componentWillReceiveProps(nextProps){
      if (this.props !== nextProps){
         nextProps.load()
      }
   }
   render () {
      return (
            <Layout>  
               <div style={{zIndex: 2}}>
               <Header />
               <Content>
                  <Switch>
                     <Route exact path="/">
                       <p>ART</p>
                     </Route>
                     <Route path="/art">
                        <ArtContainer>
                           <Gallery />
                        </ArtContainer> 
                     </Route>
                  </Switch>
                  </Content>
               </div>
            </Layout>
      )
   }
}
