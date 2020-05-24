import React from 'react';
import './test.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
class Test extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           //imgSrc: 'http://demo.sodhanalibrary.com/images/twitter_blue.png'
           imgSrc:'abc'
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
      }
    handleMouseOver() {
        this.setState({
          imgSrc: 'http://demo.sodhanalibrary.com/images/twitter_brown.png'
        });
      }
    
      handleMouseOut() {
        this.setState({
       //   imgSrc: 'http://demo.sodhanalibrary.com/images/twitter_blue.png'
       imgSrc:'abc'
        });
      }
    render(){
        return(       <div>
            <head><link href="css/hover.css" rel="stylesheet" media="all"/></head>
            {/* <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc}/> */}
            {/* <img id ="check1" src="http://demo.sodhanalibrary.com/images/twitter_blue.png"></img> */}
            {/* <div class="container">
                <img id ="check" src="http://demo.sodhanalibrary.com/images/twitter_blue.png"></img>
                <div class="overlay">
                <img id ="testcheck" src="http://demo.sodhanalibrary.com/images/twitter_blue.png"></img>
                 </div>
            </div>
            <div class="container2">
                <img id ="check2" src="http://demo.sodhanalibrary.com/images/twitter_blue.png"></img>
                <div class="overlay2">
                <img id ="testcheck2" src="http://demo.sodhanalibrary.com/images/twitter_blue.png"></img>
                 </div>
            </div> */}
            <div class="cc">
        <div class="box" ></div>
        <div class="box stack-top" ></div>
    </div>

            <div class="centertext">Test Website</div>
            <div class="cc4">
<div class="box4" ></div>
<div class="box stack-top4" ></div>
</div>
            {/* <img id ="check2" src="http://demo.sodhanalibrary.com/images/twitter_blue.png"></img>
            <img id ="check3" src="http://demo.sodhanalibrary.com/images/twitter_blue.png"></img>
            <img id ="check4" src="http://demo.sodhanalibrary.com/images/twitter_blue.png"></img> */}
          </div>



     );
    }
}
export default Test