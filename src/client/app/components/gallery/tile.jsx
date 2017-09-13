import React, { Component } from 'react';
import Styles from './tile.css';

export default class Gallery extends Component {
   constructor(props){
      super(props)
      this.state = {
         ...props.content,
         loaded: false
      }
   }
   loaded(){
      this.setState({loaded: true})
   }
   render () {
      const tileStyle = [
         Styles.main,
         ((this.state.loaded) ? Styles.reveal : null)
      ].join(" ");
      return (
               <div className={tileStyle}>
                  <img src={this.state.img} onLoad={this.loaded.bind(this)}  />
               </div>
            )
   }
}

