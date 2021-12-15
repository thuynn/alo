import logo from './logo.svg';
import './App.scss';
import React, { useEffect, useState } from "react";

const MySelf = () => {
  return (
    <div className="cv-myself">
      <img src={logo} className="cv-avatar" alt="avatar" />
      <h1 className="cv-name uppercase align-center">Nguyen Ngoc Thuy</h1>
      <div className="cv-title-job uppercase txt-gray align-center">Front End Deverloper</div>
      <div className="cv-introduction txt-gray italic">
        “I have been working for more than 
        10 years at frontend position. This 
        is the reason why I prefer my own
        framework rather than the public 
        one. One of my strength is that I 
        have good mindset in global 
        solution and flexibility of resolving 
        problem.”
      </div>
    </div>
  );
}
const Skill = () => {
  return (
    <div className="cv-box cv-skill">
        <ul className="cv-list">
          <li className="cv-title uppercase">Skills: </li>
          <li>HTML 4&5</li>
          <li>CSS 3, Less, Scss</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Jquery</li>
          <li>Angular</li>
          <li>React native</li>
        </ul>
        <ul className="cv-list">
          <li className="cv-title uppercase">Framework: </li>
          <li>Boostrap</li>
          <li>Foudation</li>
          <li>Ionic</li>
        </ul>
    </div>
  );
}
const Contact = () => {
  return (
    <div className="cv-box cv-contact">
      <ul className="contact-list">
        <li>
          <span className="fas fa-map-marker-alt"></span>
          <div className="txt-gray">HaNoi, VietNam</div>
        </li>
        <li>
          <span className="fas fa-envelope"></span>
          <div className="txt-gray"><a href="mailto: ngocthuy.mv@gmail.com">ngocthuy.mv@gmail.com</a></div>
        </li>
        <li>
          <span className="fas fa-phone-alt"></span>
          <div className="txt-gray">+84 982840613</div>
        </li>
        <li>
          <span className="fas fa-skype"></span>
          <div className="txt-gray">ngocthuy136</div>
        </li>
      </ul>
    </div>
  );
}
const Education = () => {
  return (
    <div className="cv-box">
      <h5 className="cv-box-title">Education</h5>
      <div className="cv-box-content">
        <div className="cv-title">National University of Ho Chi Minh City</div>
      </div>
    </div>
  );
}
const Experience = () => {
  return (
    <div className="cv-box">
      <h5 className="cv-box-title">Experience</h5>
      <div className="cv-box-content">
        <ul className="cv-list cv-job-detail">
          <li className="cv-title uppercase">
            Spectos Asia - <a href="https://www.spectos.com/en/">www.spectos.com</a>
          </li>
          <li className="cv-title">
            User Interface Web development
          </li>
          <li>2014 to present</li>
          <li>
            <strong>Product description:</strong> The Spectos RTPM Real-Time performance 
            Management™ Suite is a Software as a Service SaaS platform with solutions 
            and modules for the ongoing monitoring of business-relevant information in 
            real-time. Spectos Service Quality Solutions are designed for your Customer 
            Services, Human Resources, Operations and Quality Management
          </li>
          <li className="cv-title">
          Main responsibilities:
          </li>
          <li className="list-txt">Web Development Standards for all products of company.</li>
          <li className="list-txt">UI & UX, HTML ,CSS for all products.</li>
          <li className="list-txt"> Working as a member of the Product team to re-define Platform 
            app by creating a new module such as: common component,
            grid layout, convert pdf, email template, media print ...</li>
          <li className="list-txt">Collaborate with product owner to define structure and solution, 
            for example: how to have a dynamic layout, responsive layout...</li>
          <li className="list-txt">Support mobile team using react native, ionic framework to make UI.</li>
        </ul>
        <ul className="cv-list cv-job-detail">
          <li className="cv-title uppercase">
            Exo platform - <a href="https://www.exoplatform.com/">www.exoplatform.com/</a>
          </li>
          <li className="cv-title">
            Team leader of User Interface Web development
          </li>
          <li>2007 to 2014</li>
          <li>
            <strong>Product description:</strong> Develop and maintain an open-source product 
            whichprovide collaboration and communication solutions for enterprises 
            Develop and maintain an open-source product whichprovide collaboration 
            and communication solutions for enterprises
          </li>
          <li className="cv-title">Main responsibilities:</li>
          <li className="list-txt">Organize / Follow / Review the workload and the work of
            the team on severals projects.</li>
          <li className="list-txt">Develop and Contribute to resolve issues on all eXo Products
            and eXo Projects.</li>
          <li className="list-txt">Communication with others people such as TLs, PLs, etc.</li>
          <li className="list-txt">Documentation of the done work.</li>
          <li className="list-txt">Knowledge sharing and spreading in the team.</li>
          <li className="list-txt">Web Development Standards for eXo Products.</li>
          <li className="list-txt">Responsible of the quality of the done work.</li>
          <li className="list-txt">Respect the deadlines.</li>
        </ul>
      </div>
    </div>
  );
}
function App() {
  const [layout, setLayout] = useState("layout-960");
  const [mySeltCss3, setMySeltCss3] = useState("l3ayout-960");

  let mySelfCss = "";
  if (layout == "layout-960") {
    mySelfCss = "abc";
  }

  return (
    <div className={`cv-page cv-box-grid ${layout}`}>

      <div className="cv-personal box-sm-12 box-md-5 box-lg-3 box-h-5">
        <div className="cv-box-grid">
          <div className="box-sm-12">
            
            <button onClick={() => {
                setLayout("layout-960");
            }}>
                Layout 940 {layout}
            </button>

            <button onClick={() => {
                setLayout("box-lg-3 box-log-6");
            }}>
                Layout 640
            </button>
          </div>

          <div className={"box-sm-12 " + mySelfCss}>
            {layout}
            
            <MySelf/>
          </div>
          <div className="box-sm-12">
            <Skill/>
          </div>
          <div className="box-sm-12">
            <Contact/>
          </div>
        </div>
      </div>
      <div className="cv-education box-sm-12 box-md-7 box-h-auto">
        <Education/>
      </div>
      <div className="box-sm-12 box-md-7 box-h-1">
        <Experience/>
      </div>
    </div>
  );
}

export default App;
