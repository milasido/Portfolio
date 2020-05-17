import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import FOOTER from './footer';
import device from "./device .png"
import './home.css'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'

export default class home extends Component {
    constructor(props) {
        super(props);  
        this.state = {isOpen: false,};
      }
  render() {
    return (
        <div className="col bg-faded py-3 flex-grow-1 container-fluid home-home">
            <div className="container home-div">
                <div className="ava">
                    <img className="avatar" src="https://avatars1.githubusercontent.com/u/35676333?s=460&u=40f4002fa99217f89d8b800c687fa8278da5ef9e&v=4" alt="Avatar"/>
                </div>
                <div className="stage greet">
                    <div className="thuy-wrapper">
                    
                    <div className="sides">
                        <div className="side" />
                        <div className="side" />
                        <div className="side" />
                        <div className="side" />
                    </div>
                    <div className="text">
                        <div className="text--backing">I'm THUY nguyen</div>
                        <div className="text--left">
                        <div className="inner">i'm thuy nguyen</div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className="home-content container">
            
                    <div id="animate">
                        <div id="flip">
                            <div>i am a <div>website developer</div></div>
                            <div>i am a <div>software engineer</div></div>
                            <div>i am a <div>Programmer</div></div>
                        </div>
                    </div>
                    <p className="intro">
                    Hi there, please call me "th-wee nguyen" :). I'm living in Houston, TX and I'm currently a senior computer science student at University of Houton.
                    Being a programer is my dream when I was young, and I'm still pursuing my dream.</p> 
                    <p>
                        I am especially interested in website development. Coding is my habbit, passion. 
                        I know that being a programmer is not easy, but I 
                    belive the more I try, the more success I will get. 
                    So, I will never stop learning to reach my dream.  
                    </p>
                    <div style={{float: "right", position:"relative"}}>
                        <img style={{cursor:"pointer"}} onClick={()=> this.setState({isOpen: true})} className="device" src={device}/>
                        <div 
                            style={{position:"absolute", top:"50%", left:"50%", transform: "translate(-50%, -50%)", 
                            backgroundColor: "black", color:"white",paddingLeft:"10px", opacity:"0.5", 
                            paddingRight:"10px", pointerEvents:"none" }}>Click to zoom</div>
                    </div>
                    {this.state.isOpen && 
                        <Lightbox mainSrc={device}
                        onCloseRequest={()=> this.setState({isOpen: false})}/>
                    }
                    
                    
                    <p>
            
                    This website is a self-project I created during Covid-2019 ^^
                    using React, bootstrap, Github APIs, and EmailJS
                    </p> 
                    
                    <p>
                    
                    </p>
                    
                    <Link to="/contact">
                    <button class="contact100-form-btn">
						Contact Me
					</button>
                    </Link>
     
                </div>
            </div>
                  
                             
          
            <FOOTER/>

        </div>
    );
  }
}
