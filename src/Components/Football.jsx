import React from 'react';
import CenteredTabs from './Home.jsx'
import './people.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


class Football extends React.Component{
    
    
        render() {
         
          return (
<div>
            <Carousel >
         
            <div>
                <img src={require('./f1.png')} />
                <p className="legend">Legend 2</p>
            </div>
        
            
            <div>
                <img src={require('./f2.png')} />
                <p className="legend">Legend 2</p>
            </div>
            
            <div>
                <img src={require('./f3.png')} />
                <p className="legend">Legend 2</p>
            </div>
            
            <div>
                <img src={require('./f4.png')} />
                <p className="legend">Legend 2</p>
            </div>
            
            <div>
                <img src={require('./f5.png')} />
                <p className="legend">Legend 2</p>
            </div>
            
            <div>
                <img src={require('./f6.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('./f7.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('./f8.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('./f9.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('./f10.png')} />
                <p className="legend">Legend 2</p>
            </div>
          
          
        </Carousel>
        </div>
          )
        }
      }
      
    //   ReactDOM.render(<Gallery />, document.querySelector('.gallery-container'));

export default Football