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
              <h5 className="item-period ">MAR 2020 - Present</h5>
              <span className="item-company">Kompa Group</span>
              <h4 className="item-title">Front-end Developer</h4>
              <p
                style={{
                  fontWeight: "bold"
                }}
              >
                Responsibilities:{" "}
              </p>
              <p>
                - Web application development with Reacrjs and GraphQL
                <a
                  className="item-project"
                  target="_blank"
                  href="https://iboard.ssi.com.vn/"
                >
                  {" "}
                  stock SSI
                </a>
              </p>
              <p>- Frontend-engineer</p>
              <p>- Researching GraphQL,Apollo client and server</p>
              <p>- Researching styled-components</p>
              <p>- Implement Common components/Utilities on React</p>
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
                <span className="dash">-</span> Grahotel Web
              </a>
              <a
                className="item-project"
                target="_blank"
                href="https://admin.grabhotel.net/"
              >
                <span className="dash">-</span> Grahotel CMS
              </a>
              <a
                className="item-project"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.grabhotel"
              >
                <span className="dash">-</span> Grahotel App
              </a>
            </div>
          </div>

          <div className=" col-xs-12 col-sm-12">
            <div className="block-title">
              <h2>Skills</h2>
            </div>
            <div className="timeline-item clearfix">
              <p>- Programming language: Javascript,Golang,Typescript.</p>
              <p>
                - Basic knowledge: Object Oriented Programming (OOP), Structured
                Query Language (SQL), HTML, CSS, SCSS, Bootstrap, Linux, Git.
              </p>
              <p>
                - Framework: Reactjs (Hooks),Gatsby,Redux (Thunk,Saga), Ant
                Design ,Nextjs, Boostrap, Apollo GraphQL, Mongoose, Nestjs,
                Vuejs, jQuery, HTML5, CSS3, SASS, styled-component
              </p>
              <p>- Database: SQL Server,MySQL,MongoDB,PostgreSQL</p>
              <p>- Platform: Nodejs,Webpack,Babel.</p>
              <p>- API: REST,GraphQL.</p>
              <p>
                - System & Networking: Bit bucket,Github,Gitlab,Ubuntu System
                Docker,Vim,macOS.
              </p>
              <p>- Knowledge SOLID, OOP, Design pattern,Scrum.</p>
              <p>
                - Teamwork ability to learn or independent , self-motivated.
              </p>
              <p>- The ability to learn and acquire new ones.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
