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
                <p className="legend">Legend 2</p>
            </div>
        
            
            <div>
                <img src={require('./o2.png')} />
                <p className="legend">Legend 2</p>
            </div>
            
            <div>
                <img src={require('./o3.png')} />
                <p className="legend">Legend 2</p>
            </div>
            
            <div>
                <img src={require('./o4.png')} />
                <p className="legend">Legend 2</p>
            </div>
            
            <div>
                <img src={require('./o5.png')} />
                <p className="legend">Legend 2</p>
            </div>
            
            <div>
                <img src={require('./o6.png')} />
                <p className="legend">Legend 2</p>
            </div>
          
        </Carousel>
        </div>
          )
        }
      }
      
    //   ReactDOM.render(<Gallery />, document.querySelector('.gallery-container'));

export default Journey