import React from 'react';
import CenteredTabs from './Home.jsx'
import './people.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


class PeopleSpeak extends React.Component{
    
    
        render() {
         
          return (
<div>
            <Carousel >
         
            <div>
                <img src={require('./Kari.png')} />
                <p className="legend">Legend 2</p>
            </div>
        
            
            <div>
                <img src={require('./img1.png')} />
                <p className="legend">Legend 2</p>
            </div>
            
            <div>
                <img src={require('./img2.png')} />
                <p className="legend">Legend 2</p>
            </div>
            
            <div>
                <img src={require('./arnav.png')} />
                <p className="legend">Legend 2</p>
            </div>
            
            <div>
                <img src={require('./q.png')} />
                <p className="legend">Legend 2</p>
            </div>
            
            <div>
                <img src={require('./w.png')} />
                <p className="legend">Legend 2</p>
            </div>
            
            <div>
                <img src={require('./e.png')} />
                <p className="legend">Legend 2</p>
            </div>
            
            <div>
                <img src={require('./r.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('./t.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('./y.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('./u.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('./i.png')} />
                <p className="legend">Legend 2</p>
            </div>
        </Carousel>
        </div>
          )
        }
      }
      
    //   ReactDOM.render(<Gallery />, document.querySelector('.gallery-container'));

export default PeopleSpeak