import React, { Component } from 'react';
import Styles from './socialLinks.css';

export default class Home extends Component {
   constructor(props){
      super(props)
      this.state = {
         ...this.props
      }
   }
   render() {
      return (
               <div className={Styles.main}>
                  {
                     this.props.links.map((link)=>{
                        return ( 
                           <a href={link.path}>
                              {link.icon}   
                              <p>{link.path.substr(12)}</p>
                           </a>
                        )
                     })
                  }
               </div>
            )
   }
}

