import React, { Component } from 'react';
import axios from 'axios';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'

export default class projects extends Component {
  constructor(props){
    super(props);
    this.state={
      data: [],
      isLoaded: true,
      isOpen: false,
      photoIndex: 0
    }
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/milasido/repos")
      .then(res =>{ this.setState({data: res.data}); console.log(res)});
  }

  render() {
    const {data, isLoaded, gif} = this.state;
    const x = atob("IyBFY29tbWVyY2Utd2Vic2l0ZQojIyBQcm9qZWN0IERlc2NyaXB0aW9uOiAK"); 

    
    return (
      <section class="wrapper col bg-faded py-3 flex-grow-1 container-fluid">
      <div class="container-fostrap">
          <div>
              
              <h1 class="heading">
                  Check Out My Projects ^^
              </h1>
          </div>

          <div class="content">
              <div class="">             
                  <div class="row">
                  {data.map((item, key)=>(
                      <div class="cardwrap col-xs-12 col-md-4" key={key}>
                        
                          <div class="card">
                            <div style={{position:"relative"}}> 
                              <a class="img-card">
                              <img style={{cursor:"pointer"}} onClick={()=> this.setState({isOpen: true, photoIndex: key})} className="device" src={item.homepage}/>
                                <div 
                                style={{position:"absolute", top:"50%", left:"50%", transform: "translate(-50%, -50%)", 
                                backgroundColor: "black", color:"white",paddingLeft:"10px", opacity:"0.5", 
                                paddingRight:"10px", pointerEvents:"none" }}>Click to zoom</div>                   
                              </a>
                              </div>
                              {this.state.isOpen && 
                              <Lightbox mainSrc={data[this.state.photoIndex].homepage}
                              onCloseRequest={()=> this.setState({isOpen: false})}/>
                              }
                              <div class="card-content">
                                  <h4 class="card-title">
                                    <a id="project-name">
                                      {item.name}
                                    </a>
                                  </h4>
                                  <p class="card-intro">
                                      {item.description}
                                  </p>
                              </div>
                              <div class="card-read-more">
                                  <a onClick={()=>window.open(item.html_url)} class="btn btn-link btn-block">
                                      Read More
                                  </a>
                              </div>
                          </div>
                      </div>
                       ))}
              
                  </div>
              </div>
          </div>
      </div>
      </section>

    )
  }
}
