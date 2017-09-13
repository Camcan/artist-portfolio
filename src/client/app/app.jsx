import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import site from './siteScaffold.js';

import Layout from './components/page/layout.jsx';
import Content from './components/page/content.jsx';
import Header from './components/header/index.jsx';
import Opener from './components/page/opener.jsx';
import Home from './components/home/index.jsx';
import About from './components/about/index.jsx';
import ArtContainer from './components/art/index.jsx';
import Gallery from './components/gallery/index.jsx';
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
                     <Route exact path={"/"}>
                        <Home>
                           <Opener opener={site.home.opener} />
                           <Gallery items={site.home.gallery} />
                        </Home>
                     </Route>
                     <Route path="/about">
                        <About content={site.about}/>
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
