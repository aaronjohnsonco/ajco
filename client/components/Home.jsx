import React, { Component } from 'react';
import { Link } from 'react-router';
import { Motion } from 'react-motion';

export default class Home extends Component {
  render() {
    const resumeUrl = '/resume'
    return (
      <div className="home_container">
        <p className="text-center"><img src="/images/logo3.png" className="logo_img animated fadeIn" /></p>
        <h1 className="home_heading animated fadeInDown">Aaron Johnson</h1>
        <h2 className="home_subheading animated fadeInUp">Front-End Web Developer</h2>
        <p className="text-center">
          <Link className="btn btn-rust animated fadeIn" to={resumeUrl}>View Resume</Link>
          <a className="btn btn-grey animated fadeIn2">PDF Resume</a>
        </p>
      </div>
    );
  }
};
