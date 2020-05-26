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
               
            </div>
            
            <div>
                <img src={require('./img2.png')} />
               
            </div>
            
            <div>
                <img src={require('./arnav.png')} />
            </div>
            
            <div>
                <img src={require('./q.png')} />
              
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
                
            </div>
            <div>
                <img src={require('./y.png')} />
                
            </div>
            <div>
                <img src={require('./u.png')} />
               
            </div>
            <div>
                <img src={require('./i.png')} />
               
            </div>
            <div>
                <img src={require('./mem.png')} />
             
            </div>
            <div>
                <img src={require('./tt2.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('./bl.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('./mem22.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('./mem11.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('./w2.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('./w3.png')} />
              
            </div>
            <div>
                <img src={require('./w4.png')} />
                
            </div>
            <div>
                <img src={require('./w5.png')} />
                
            </div>
            <div>
                <img src={require('./w6.png')} />
        
            </div>
            <div>
                <img src={require('./w7.png')} />
               
            </div>
        </Carousel>
        </div>
          )
        }
      }
      
    //   ReactDOM.render(<Gallery />, document.querySelector('.gallery-container'));

export default PeopleSpeak