import React from 'react';
import CenteredTabs from './Home.jsx'
import './people.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


class Trips extends React.Component{
    
    
        render() {
         
          return (
<div>
            <Carousel >
         
            <div>
                <img src={require('./t1.png')} />
               <p></p>
            </div>
        
            
            <div>
                <img src={require('./t2.png')} />
               <p></p>
            </div>
            
            <div>
                <img src={require('./t3.png')} />
               <p></p>
            </div>
            
            <div>
                <img src={require('./t4.png')} />
               <p></p>
            </div>
            
            <div>
                <img src={require('./t5.png')} />
               <p></p>
            </div>
            
            <div>
                <img src={require('./tt1.png')} />
               <p></p>
            </div>
            <div>
                <img src={require('./tt2.png')} />
               <p></p>
            </div>
            <div>
                <img src={require('./tt3.png')} />
               <p></p>
            </div>
            <div>
                <img src={require('./tt4.png')} />
               <p></p>
            </div>
            <div>
                <img src={require('./tt5.png')} />
               <p></p>
            </div>
          
        </Carousel>
        </div>
          )
        }
      }
      
    //   ReactDOM.render(<Gallery />, document.querySelector('.gallery-container'));

export default Trips