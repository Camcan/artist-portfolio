import React, {Component} from 'react';
import NavigationContainer from './navigationContainer.jsx';
import NavLink from './navlink.jsx';
import Styles from './header.css';
import { Link } from 'react-router-dom';

class Header extends Component { 
   render(){ 
      return ( 
         <div className={Styles.header}>
            <Link to='/'>
               <h2 className={Styles.title}>Rebecca Hawkes</h2>
            </Link>
            <NavigationContainer />
         </div>
      )
   }
};

export default Header;
