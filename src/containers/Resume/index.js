import React from "react";
import "./style.scss";

const Resume = () => {
  return (
    <div className="resume-wrapper">
      <div className="page-title">
        <h1>Resume</h1>
        <div className="page-subtitle">
          <h4>Fresher</h4>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className=" col-xs-12 col-sm-6 ">
            <div className="block-title">
              <h2>Education</h2>
            </div>
            <div className="timeline-item clearfix">
              <h5 className="item-period ">2015-2019</h5>
              <span className="item-company">
                Posts And Telecommunications Institute Of Technology (PTIT)
              </span>
              <h4 className="item-title">Information Technology</h4>
              <p>
                Learn about Data structures and algorithms, OOP, Restful API,
                development application,SQL etc.
              </p>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 ">
            <div className="block-title">
              <h2>Experience</h2>
            </div>
            <div className="timeline-item clearfix">
              <h5 className="item-period ">MAR 2020 - Now</h5>
              <span className="item-company">Kompa Group</span>
              <h4 className="item-title">Front-end Developer</h4>
              <p>
                - Web application development with Django
                <a href="https://smartthuanviet.cf/"> smartthuanviet.cf</a>
              </p>
              <p>- Website management</p>
              <p>- It help desk</p>
            </div>
            <div className="timeline-item clearfix">
              <h5 className="item-period ">MAY 2019 - MAR 2020</h5>
              <span className="item-company">Cititech Co., Ltd </span>
              <h4 className="item-title">Fresher (Fullstack Javascript) </h4>
              <p
                style={{
                  fontWeight: "bold"
                }}
              >
                Responsibilities:{" "}
              </p>
              <p>- Experienced in doing research with lectures</p>
              <p>- Researching Nextjs,Gatsby</p>
              <p>- Researching Docker, Docker Swarm</p>
              <p>- Reseaching NodeJS architecture</p>
              <p>- Implement Common components/Utilities on React</p>
              <p>
                - Developing Web Application with RestfulAPI and Singleton
                pattern
              </p>
              <p>
                - Building Grabhotel-CMS Web with ReactCoreUI and Ant Design.
              </p>
              <p>- Building Grabhotel Web Application.</p>
              <p>- Deloy web application on Google cloud</p>
              <p>
                ->> Finishing 90% function of a Grabhotel-CMS,Grahotel Web,API
                Grabhotel
              </p>
              <p
                style={{
                  fontWeight: "bold"
                }}
              >
                Projects:{" "}
              </p>
              <a
                className="item-project"
                target="_blank"
                href="https://grabhotel.net/"
              >
                <span className="dash">-</span> Grahotel web: .
              </a>
            </div>
            <div className="timeline-item clearfix">
              <h5 className="item-period ">OCT 2019- DEC 2019</h5>
              <span className="item-company">Beesight Soft</span>
              <h4 className="item-title">Fresher Reactjs</h4>
              <p>- Co-ordinated with ReactJS in doing projects</p>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-12">
            <div className="block-title">
              <h2>Skills</h2>
            </div>
            <div className="timeline-item clearfix">
              <p>- Programming language: Javascript ,Python, C++, C#.</p>
              <p>
                - Basic knowledge: Object Oriented Programming (OOP), Structured
                Query Language (SQL), HTML, CSS, SCSS, Bootstrap, Linux, Git.
              </p>
              <p>- Framework: ReactJS, Django, Flask.</p>
              <p>- Platform: Nodejs.</p>
              <p>- Knowledgedgeable in information security.</p>
              <p>- Skilled in teamwork.</p>
              <p>- Dynamic in adopting new technology into working.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
