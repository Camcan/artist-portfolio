import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Styles from './artContainer.css';

export default class ArtContainer extends Component {
   constructor(props){
      super(props)
   }
   render () {
      return (
               <div className={Styles.main}>
                  {this.props.children}
               </div>
            )
   }
}

