import React, { Component } from 'react';

export default class footer extends Component {
  render() {
    return (
        <div className="footer">
        <div className="footer-content">
            <a href="https://www.facebook.com/nguyen.wol" ><i className="icon-footer">
                <span className="fa fa-facebook-square" aria-hidden="true"><br/>
                <span className="icon-name">Facebook</span>
                </span></i>
            </a>
            <a href="https://www.linkedin.com/in/thuy-nguyen-b97743b5/" ><i className="icon-footer">
                <span className="fa fa-linkedin-square" aria-hidden="true"><br/>
                <span className="icon-name">Linkedin</span>
                </span>
            </i></a>
            <a href="https://github.com/milasido"><i className="icon-footer">
                <span className="fa fa-github" aria-hidden="true"><br/>
                <span className="icon-name">Github</span>
                </span>
            </i></a>
            <a href="mailto:wolnguyen98@gmail.com" ><i className="icon-footer">
                <span className="fa fa-envelope" aria-hidden="true"><br/>
                <span className="icon-name">Email</span>
                </span>
            </i></a>
            <a href="tel:8328183390" ><i className="icon-footer">
                <span className="fa fa-phone-square" aria-hidden="true"><br/>
                <span className="icon-name">Phone</span>
                </span>
            </i></a>
        </div>
    </div>
    );
  }
}
