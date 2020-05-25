import React from 'react';
import CenteredTabs from './Home.jsx'
import './people.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


class PeopleSpeak extends React.Component{
    
    
        render() {
         
          return (

            <Carousel>
            <div>
                <img src={require('./scene.jpg')} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={require('./Kari.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="scene.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
            
          )
        }
      }
      
    //   ReactDOM.render(<Gallery />, document.querySelector('.gallery-container'));

export default PeopleSpeak