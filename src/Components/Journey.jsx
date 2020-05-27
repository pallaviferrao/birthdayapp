import React from 'react';
import CenteredTabs from './Home.jsx'
import './people.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


class Journey extends React.Component{
    
    
        render() {
         
          return (
<div>
            <Carousel >
         
            <div>
                <img src={require('./o1.png')} />
               <p></p>
            </div>
        
            
            <div>
                <img src={require('./o2.png')} />
               <p></p>
            </div>
            
            <div>
                <img src={require('./o3.png')} />
               <p></p>
            </div>
            
            <div>
                <img src={require('./o4.png')} />
               <p></p>
            </div>
            
            <div>
                
                <img src={require('./o5.png')} />
               <p></p>
            </div>
            
            <div>
                <img src={require('./o6.png')} />
               <p></p>
            </div>
            <div>
                <img src={require('./o11.png')} />
               <p></p>
            </div>
        </Carousel>
        </div>
          )
        }
      }
      
    //   ReactDOM.render(<Gallery />, document.querySelector('.gallery-container'));

export default Journey