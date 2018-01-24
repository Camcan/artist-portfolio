import React, { Component } from 'react';
import Styles from './gallery.css';
import Tile from './tile.jsx';

export default class Gallery extends Component {
   constructor(props){
      super(props)
   }
   renderItems(){
      return this.props.items.map((i)=>{
         return <Tile content={i} />
      })
   }
   render () {
      return (
               <div className={Styles.main}>
               {this.renderItems()}
               </div>
            )
   }
}

