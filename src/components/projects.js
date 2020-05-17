import React, { Component } from 'react';
import axios from 'axios';

export default class projects extends Component {
  constructor(props){
    super(props);
    this.state={
      data: [],
      isLoaded: true
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
              <div class="container">             
                  <div class="row">
                  {data.map(item=>(
                      <div class="cardwrap col-xs-12 col-md-4">
                        
                          <div class="card">
                              <a class="img-card">
                              <img src={item.homepage}/>
                            </a>
                              <div class="card-content">
                                  <h4 class="card-title">
                                    <a id="project-name">
                                      {item.name}
                                    </a>
                                  </h4>
                                  <p class="">
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
