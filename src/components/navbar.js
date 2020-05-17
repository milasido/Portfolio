import React, { Component, Fragment } from "react";
import HOME from "./home";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import RESUME from "./resume";
import CONTACT from "./contact";
import PROJECTS from "./projects";
import logo from "./logo.jpg";

export default class navbar extends Component{
    

    render(){
        return(
            <div className="container-fluid">
            <div className="row min-vh-100 flex-column flex-md-row">
            <aside className="col-12 col-md-2 p-0 flex-shrink-1">
                <nav className="navbar navbar-expand navbar-dark flex-md-column flex-row align-items-start py-2">
                
                <div className="collapse navbar-collapse">
                
                    <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                    
                    <li className="nav-logo">
                        <Link to="/" style={{ textDecoration: 'none' }}><img className="logo" src={logo}/></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" style={{ textDecoration: 'none' }}><a className="nav-link pl-0 "><span className="d-md-inline">Projects</span></a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume"style={{ textDecoration: 'none' }}><a className="nav-link pl-0"><span className="d-md-inline">Resume</span></a></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/contact"style={{ textDecoration: 'none' }}><a className="nav-link pl-0"><span className="d-md-inline">Contact</span></a></Link>
                    </li>
                    {/* <li className="nav-item btn btn-primary btn-round"> */}
                       
                       
                    </ul>
                </div>
                </nav> 
            </aside>          
            <Switch>
                <Route exact path="/" component={HOME}/>
                <Route exact path="/resume" component={RESUME}/>
                <Route exact path="/projects" component={PROJECTS}/>
                <Route exact path="/contact" component={CONTACT}/>
            </Switch>
            
            </div>
      </div>
    );
  }
}
