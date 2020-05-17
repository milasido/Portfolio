import React, { Component } from 'react';
import emailjs from 'emailjs-com';

export default class contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: 'JOB-PORTFOLIO',
            message: '',
            nameError: "",
            emailError: "",
            messageError: ""
          }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleValidate = () =>{
        let emailError = "", nameError = "", messageError = "";
        if (!this.state.name) nameError = "Please type your name";
        if (!this.state.email.includes("@"&&".")) emailError = "Valid email is required: abc@gmail.com";
        if (!this.state.message) messageError = "Please type your message";
        if (nameError||emailError||messageError) {
            this.setState({emailError: emailError, nameError: nameError, messageError: messageError});
            return false;
        }
        else {
            this.setState({emailError: "", nameError: "", messageError: ""});
            return true;
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const service_id = "default_service";
        const template_id = "template_MoT0GMKG";
        const user_id = "user_pbUOXuIasdBW7d8NkHRiR";
       
        // validate first
        const valid = this.handleValidate();
        if(valid){
        emailjs.send(service_id, template_id, this.state, user_id)
            .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
            console.log('FAILED...', err);
            });
        }
     }

     

  render() {
    return (
      <div className="contact col"> 
      <div className="bg-contact2" style={{backgroundImage: 'url("https://previews.123rf.com/images/canjoena/canjoena1701/canjoena170100618/68656839-businessman-hold-world-map-connect-international-network-with-cityscape-of-business-background-for-t.jpg")'}}>
        <div className="container-contact2">
          <div className="wrap-contact2">
            <form onSubmit={this.handleSubmit} className="contact2-form validate-form">
              <span className="contact2-form-title">
                Contact Me
              </span>
              <div className="wrap-input2 validate-input">
                {!this.state.nameError
                    ? <input onChange={this.handleChange} value={this.state.name} className="input2" type="text" name="name" placeholder="Name"/>
                    : <div><div className="alert-validate" data-validate={this.state.nameError} sign="\f128a"/>
                      <input onChange={this.handleChange} value={this.state.name} className="input2" type="text" name="name" placeholder="Name"/>
                      </div>
                }
                {/* <span className="focus-input2" data-placeholder="NAME" /> */}
              </div>
              <div className="wrap-input2 validate-input">
                {!this.state.emailError
                    ? <input onChange={this.handleChange} value={this.state.email}  className="input2" type="text" name="email" placeholder="Email"/>
                    : <div><div className="alert-validate" data-validate={this.state.emailError}/>
                      <input onChange={this.handleChange} value={this.state.email}  className="input2" type="text" name="email" placeholder="Email"/>
                      </div>  
                }
                    {/* <span className="focus-input2" data-placeholder="EMAIL" /> */}              
              </div>
              <div className="wrap-input2 validate-input">
                {!this.state.messageError
                    ? <textarea  onChange={this.handleChange} value={this.state.message} className="input2" name="message" placeholder="Message" />
                    : <div><div className="alert-validate" data-validate={this.state.messageError}/>
                      <textarea  onChange={this.handleChange} value={this.state.message} className="input2" name="message" placeholder="Message" />
                      </div>
                }
                    {/* <span className="focus-input2" data-placeholder="MESSAGE" /> */}
              </div>
              <div className="container-contact2-form-btn">
                <div className="wrap-contact2-form-btn">
                  <div className="contact2-form-bgbtn" />
                  <button type="submmit" className="contact2-form-btn">
                    Send Your Message
                  </button>
                </div>              
              </div>
              
            </form>
            <div className="contact-icon">
            <a href="https://www.facebook.com/nguyen.wol" ><i className="icon-contact">
                <span className="fa fa-facebook-square" aria-hidden="true"><br/>
                <span className="icon-name">Facebook</span>
                </span></i>
            </a>
            <a href="https://www.linkedin.com/in/thuy-nguyen-b97743b5/" ><i className="icon-contact">
                <span className="fa fa-linkedin-square" aria-hidden="true"><br/>
                <span className="icon-name">Linkedin</span>
                </span>
            </i></a>
            <a href="https://github.com/milasido"><i className="icon-contact">
                <span className="fa fa-github" aria-hidden="true"><br/>
                <span className="icon-name">Github</span>
                </span>
            </i></a>
            <a href="mailto:wolnguyen98@gmail.com" ><i className="icon-contact">
                <span className="fa fa-envelope" aria-hidden="true"><br/>
                <span className="icon-name">Email</span>
                </span>
            </i></a>
            <a href="tel:8328183390" ><i className="icon-contact">
                <span className="fa fa-phone-square" aria-hidden="true"><br/>
                <span className="icon-name">Phone</span>
                </span>
            </i></a>
        </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
