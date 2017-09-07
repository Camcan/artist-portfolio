import React, { Component } from 'react';
import Styles from './gallery.css';

export default class Gallery extends Component {
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

