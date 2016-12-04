import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <div className="resume_container">

        <div className="resume_top">
          <p className="header_name">Aaron Johnson</p>
          <p className="header_detail">aaronjohnsonis@gmail.com | 615.630.5540</p>
        </div>

        <div className="resume_about">
          <h2 className="resume_header">A little bit about me...</h2>
          <div className="row">
            <div className="col-md-4">
              <p className="text-center">
                <img src="/images/kids.png" className="about_img" />
              </p>
              <p className="about_sub">Three great kids!</p>
              <p className="about_text">These guys keep me busy, but I could not imagine life without them.</p>
            </div>
            <div className="col-md-4">
              <p className="text-center">
                <img src="/images/coaching.png" className="about_img" />
              </p>
              <p className="about_sub">Love to coach!</p>
              <p className="about_text">Get a lot of dirt in my shoes during the summer coaching. Been coaching this guy since he was 5.</p>
            </div>
            <div className="col-md-4">
              <p className="text-center">
                <img src="/images/bike.png" className="about_img" />
              </p>
              <p className="about_sub">Enjoy the outdoors!</p>
              <p className="about_text">I love to spend 2-3 hours riding the Natches Trace when time allows.</p>
            </div>
          </div>
        </div>

        <div className="resume_work">
          <h2 className="resume_header">Some of the things I've worked on...</h2>
          <div className="work_section">
            <div className="image_container">
              <img src="/images/lobl_icon-ios.png" className="icon_img" />
            </div>
            <div className="work_content">
              <p className="project_name">Levels of Biblical Learning App</p>
              <p className="work_subheader">Project Details:</p>
              <p className="work_text">LifeWay wanted an app developed for a piece of curriculum already in place in print. I took the concepts used in print and applied them in the design of the app. Then, based on the way the user would use the app, I completed the development and deployment of the app.</p>
              <p className="work_subheader">Technologies Used:</p>
              <p className="work_text">Sketch for design; React Native for development</p>
              <p className="work_text"><a href="http://itunes.apple.com/us/app/levels-of-biblical-learning/id1140252416?mt=8">View in the App Store</a></p>
            </div>
          </div>

          <div className="work_section">
            <div className="image_container">
              <img src="/images/smallgroup.png" className="icon_img_bordered" />
            </div>
            <div className="work_content">
              <p className="project_name">Smallgroup.com UX/UI</p>
              <p className="work_subheader">Project Details:</p>
              <p className="work_text">Assisted in the concepts of how the user would interact with the application and collaborated on the design of the application. Was used to create conceptual elements that were then developed by developers in Angular.</p>
              <p className="work_subheader">Technologies Used:</p>
              <p className="work_text">Photoship for design and mockups</p>
            </div>
          </div>

          <div className="work_section">
            <div className="image_container">
              <img src="/images/chadwick.png" className="icon_img_bordered" />
            </div>
            <div className="work_content">
              <p className="project_name">Untie the Knot</p>
              <p className="work_subheader">Project Details:</p>
              <p className="work_text">Client was seeking a site that would easily market services to potential clients the process of an uncontested divorce. The goal was to create an application that would give the user all information needed to streamline the process and lower costs for all parties involved.</p>
              <p className="work_subheader">Technologies Used:</p>
              <p className="work_text">Sketch for design; Ruby on Rails and Bootstrap for development</p>
              <p className="work_text"><a href="http://untietheknottn.com">View Site</a></p>
            </div>
          </div>


          <div className="work_section_btm">
            <div className="image_container">
              <img src="/images/mati.png" className="icon_img" />
            </div>
            <div className="work_content">
              <p className="project_name">Matumaini's Mission</p>
              <p className="work_subheader">Project Details:</p>
              <p className="work_text">Client was starting a mininistry raising funds to support orphans in Africa. The site needed to clearly convey what they were seeking to accomplish and attract donors.</p>
              <p className="work_subheader">Technologies Used:</p>
              <p className="work_text">Sketch for design; Ruby on Rails and Bootstrap for development</p>
              <p className="work_text"><a href="http://matumainismission.org">View Site</a></p>
            </div>
          </div>
        </div>

        <div className="resume_tech">
          <h2 className="resume_header">Quick Facts</h2>
          <div className="row">
            <div className="col-md-7">
              <p className="tech_subhead">Education</p>
              <p className="tech_text">Belmont University - Nashville, TN</p>
              <p className="tech_major">Religious Studies (1995-1997)</p>
              <p className="tech_text">Ferrum College - Ferrum, VA</p>
              <p className="tech_major">General Studies (1993-1995)</p>
              <p className="tech_subhead2">Work History</p>
              <p className="tech_text">LifeWay Christian Resources 2012-2016</p>
              <p className="tech_title">Epub & App Developer</p>
              <p className="tech_description">Develop apps for LifeWay Kids using React Native and Aquafadas. Participated in the UI/UX design  of smallgroup.com, an application to create custom bible studies. Develop epubs for LifeWay Adult and Student quarterly curriculum.</p>
              <p className="tech_text">Kings Meadow Study Center 2009-2011</p>
              <p className="tech_title">Curriculum Producer</p>
              <p className="tech_description">Captured lecture content, both video and audio, performed all editing, coordinated the development of written materials, designed cover art for DVD packaging and discs, and handled all marketing and customer service for the product.</p>
              <p className="tech_text">Auxilium Network 2009-2010</p>
              <p className="tech_title">Church Relations Director</p>
              <p className="tech_description">Provided consulting services for churches and search committees in the pastoral search process, focusing primarily, but not exclusively, on Presbyterian denominations.</p>
            </div>
            <div className="col-md-5">
              <p className="tech_subhead">Technologies</p>
              <p className="tech_text_sub">Client Side Programming:</p>
              <p className="tech_text_indent">HTML, CSS, Javascript, React</p>
              <p className="tech_text_sub">Server-Side Programming:</p>
              <p className="tech_text_indent">Ruby on Rails, PHP, Meteor</p>
              <p className="tech_text_sub">Mobile Application Programming:</p>
              <p className="tech_text_indent">React Native, Swift (learning)</p>
              <p className="tech_text_sub">Databases:</p>
              <p className="tech_text_indent">MySQL, MongoDB</p>

              <p className="tech_subhead2">Applications</p>
              <p className="tech_text">Photoshop, Indesign, Sketch, Atom, Git, Sigil</p>

            </div>
          </div>
        </div>


        <div className="footer">
          <p className="footer_text">aaronjohnsonis@gmail.com | 615-630-5540</p>
        </div>

      </div>
    );
  }
};
