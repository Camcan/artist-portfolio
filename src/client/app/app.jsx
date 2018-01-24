import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';

import site from './siteScaffold.js';

import Layout from './components/page/layout.jsx';
import Content from './components/page/content.jsx';
import Header from './components/header/index.jsx';
import Footer from './components/page/footer.jsx';
import Opener from './components/page/opener.jsx';
import Home from './components/home/index.jsx';
import ArtContainer from './components/art/index.jsx';
import Gallery from './components/gallery/index.jsx';
import About from './components/about/index.jsx';
import Contact from './components/contact/index.jsx';
import Styles from './app.css';
import './css/normalize.css';
import './css/base.css';
import Routes from './routes.js';



class App extends Component {
   constructor(props){
      super(props)
      this.state = {
         ...props,
         width: '100%',
         routes: Routes,
         sliderOffset: 0,
         sliderWidth: Routes.length * 100 + "%",
         route: props.history.location.pathname
      };
      this.updateDimensions = this.updateDimensions.bind(this);
      this.updateDimensions();
      this.changeRoute = this.changeRoute.bind(this);
      this.initialSlider = this.initialSlider.bind(this);
   }
   changeRoute(path = this.state.route){
      path = path.split('/')[0] 
      console.log("ChangeRoute:", path)
      for (var z=0; z < Routes.length; z++) {
         if (Routes[z][1] == path) {
            this.initialSlider(z)
         }
      }
   }
   updateDimensions() {

            var w = window, 
                d = document, 
                documentElement = d.documentElement,
               body = d.getElementsByTagName('body')[0],
               width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
               height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight,
               sliderWidth = this.state.routes.length * width;
            console.log("NewSize:", width, height)
            this.setState({width: width, height: height, sliderWidth: sliderWidth
            });
      
   }         
   componentDidMount() {
       window.addEventListener("resize", this.updateDimensions)
      this.props.history.listen( location =>  {
         this.changeRoute(location.pathname) 
      });
      this.updateDimensions();
      
      this.initialSlider();
      this.changeRoute();
   }
   componentWillUnmount() {           
      window.removeEventListener("resize", this.updateDimensions);
   }
   initialSlider(offset = 0){
      console.log("INITIALSLIDERFUNC: Offset", offset, this.state.routes.length);
      let sliderOffset = offset * this.state.width;
      let sliderWidth = this.state.routes.length * this.state.width;
      console.log("sliderOffset", sliderOffset, "sliderWidth", sliderWidth, "Width", this.state.width, "RoutesLength", this.state.routes.length)
      this.setState({
         sliderWidth: sliderWidth,
         sliderOffset: sliderOffset
      })
   }
   componentWillReceiveProps(nextProps){
      if (this.props.history !== nextProps.history){
         this.changeRoute() 
      }
   }
   render () {
      let sliderStyles = {
         width: this.state.sliderWidth,
         left:  this.state.sliderOffset
      }
      console.log(sliderStyles, this.state.width)
      return (
            <Layout>  
               <div style={{zIndex: 2}}>
                  <Header />
                     <Content>
                        <div className={Styles.sliderContainer}>
                           <div className={Styles.sliderContent} style={sliderStyles}>
                              <Home>
                                 <Opener opener={site.home.opener} />
                                 <Gallery items={site.home.gallery} />
                              </Home>
                              <About content={site.about}/>
                              `<Contact content={site.contact} /> 
                           </div>
                        </div>
                     </Content>
                  <Footer owner={site.owner} />
               </div>
            </Layout>
      )
   }
};
export default withRouter(App);
