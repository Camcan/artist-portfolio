import React, { Component } from 'react';
import Styles from './about.css';
import Opener from '../page/opener.jsx';
import Academia from './academia.jsx';

export default class Home extends Component {
   constructor(props){
      super(props)
      this.state = {
         ...this.props.content
      }
   }
   resumeLink(){
      const downloadIcon = (
         <svg viewBox="0 0 24 24">
             <path fill="#FFF" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
         </svg>
      );
      if (this.state.resumePath) {
         return (
            <div className={Styles.resumeContainer}>   
               <a href={this.state.resumePath} download>
                  <div className={Styles.resumeButton}>
                     <strong>My Resume</strong>{downloadIcon}
                  </div>
               </a>
            </div>
         )
      }
   }
   render() {
      return (
               <div className={Styles.main}>
                  <Opener opener={this.state.opener} />
                  {
                        this.resumeLink()
                  }
                  <Academia academia={this.state.academicHistory} />
               </div>
            )
   }
}

