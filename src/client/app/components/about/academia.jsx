import React, { Component } from 'react';
import Styles from './academia.css';


export default class Home extends Component {
   constructor(props){
      super(props)
      this.state = {
         ...this.props
      }
   }
   renderSections(){
      return this.props.academia.map((obj, i)=>{
         return (   
            <div key={i}>
               <h2>{obj.title}</h2>
               {this.renderYears(obj.sections)}
            </div>
         );
      });
   }
   renderYears(years){
      return years.map((obj, i)=>{
         return (   
            <div className={Styles.yearContainer} key={i}>
               <div className={Styles.year}>
                  <p className={Styles.yearTag}>{obj.title}</p>
                  <div className={Styles.yearBar}></div>
               </div>
               <div className={Styles.happenings}>
                  {this.renderHapps(obj.sections)}
               </div>
            </div>
         );
      });
   }
   renderHapps(happs){
       return happs.map((obj, i)=>{
         return (   
            <div className={Styles.happening} key={i}>
               <h2 className={Styles.itemTitle}>
                  {obj.title}
                  { (obj.grade) ? <span className={Styles.grade}>{obj.grade}</span> : null }
               </h2>
               { (obj.institute) ? <p className={Styles.institute}>
                     {obj.institute}
                  </p> : null }
            </div>
         );
      });
   }
   render() {
      return (
               <div className={Styles.main}>
                  { this.renderSections() }
               </div>
            )
   }
}

