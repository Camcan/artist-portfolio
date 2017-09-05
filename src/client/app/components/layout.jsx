import React, { Component } from 'react';
import Styles from './layout.css';


export default class Layout extends Component {
   render(){
      return <div className={Styles.layout}>
            { this.props.children }
         </div>
   }
}
