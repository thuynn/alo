import React, { useState } from "react";
import logo from './avatar.png';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';

const MySelf = () => {
  return (
    <div className="cv-myself">
      <div className="cv-avatar">
        <img src={logo}  alt="avatar" />
      </div>
      <div className="">
        <h1 className="cv-name uppercase align-center text-custom-color">Nguyen Ngoc Thuy</h1>
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
    </div>
  );
}

const Skill = () => {
  return (
    <div className="cv-box cv-skill">
        <ul className="cv-list">
          <li className="cv-title uppercase text-custom-color">Skills: </li>
          <li>HTML 4 & 5</li>
          <li>CSS 3, Less, Scss</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Jquery</li>
          <li>Angular</li>
          <li>React native</li>
        </ul>
    </div>
  );
}
const Framework = () => {
  return (
    <div className="cv-box cv-skill">
        <ul className="cv-list">
          <li className="cv-title uppercase text-custom-color">Frameworks: </li>
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
      <ul className="contact-list align-center">
        <li>
          <i className="fa fa-map-marker text-custom-color"></i>
          <div className="txt-gray">HaNoi, VietNam</div>
        </li>
        <li>
          <i className="fa fa-envelope text-custom-color"></i>
          <div className="txt-gray"><a href="mailto: ngocthuy.mv@gmail.com">ngocthuy.mv@gmail.com</a></div>
        </li>
        <li>
          <span className="fa fa-phone text-custom-color"></span>
          <div className="txt-gray"><a href="tel:+84982840613">+84 982840613</a></div>
        </li>
        <li>
          <span className="fa fa-skype text-custom-color"></span>
          <div className="txt-gray">ngocthuy136</div>
        </li>
      </ul>
    </div>
  );
}

const Education = () => {
  return (
    <div className="cv-box">
      <h5 className="cv-box-title text-custom-color">Education</h5>
      <div className="cv-box-content">
        <div className="cv-title"><strong>National University of Ho Chi Minh City</strong></div>
      </div>
    </div>
  );
}

const Experience1 = () => {
  return (
    <div className="cv-box">
      <h5 className="cv-box-title text-custom-color">Experience</h5>
      <div className="cv-box-content">
        <ul className="cv-list cv-job-detail">
          <li className="cv-title uppercase">
            Spectos Asia - <a href="https://www.spectos.com/en/" target="_blank">www.spectos.com</a>
          </li>
          <li className="cv-title">
            Senior User Interface Web development
          </li>
          <li>2014 to present</li>
          <li>
            <strong>Product description:</strong> Feedbackstr is a real-time product to enable businesses to measure customer satisfaction through web and app-based surveys. Its data is collected via feedback or customer's data, analyzed, and visualized. 
            <ul>
              <li>- Using campaign module to manage, design surveys & feedbacks.</li>
              <li>- Using customized cockpits and dashboards, managers can better understand their processes, monitor performance, and continuously improve their service quality.</li>
              <li>- Using ticket module to manage and assign tasks to all employees</li>
              <li>- Aggregates and analyzes into reports according to customer requirements.</li>
            </ul>
          </li>
          <li className="cv-title">
          Main responsibilities:
          </li>
          <li className="list-txt">Web Development Standards for all products of company.</li>
          <li className="list-txt">UI & UX, HTML, CSS for all products.</li>
          <li className="list-txt"> Working as a member of the Product team to re-define Platform 
            app by creating a new module such as: common component,
            grid layout, convert pdf, email template, media print ...</li>
          <li className="list-txt">Collaborate with product owner to define structure and solution, 
            for example: how to have a dynamic layout, responsive layout ...</li>
          <li className="list-txt">Support mobile team using react native, ionic framework to make UI.</li>
        </ul>
      </div>
    </div>
  );
}

const Experience2 = () => {
  return (
    <div className="cv-box">
      <div className="cv-box-content">  
        <ul className="cv-list cv-job-detail">
          <li className="cv-title uppercase">
            Exo platform - <a href="https://www.exoplatform.com/" target="_blank">www.exoplatform.com/</a>
          </li>
          <li className="cv-title">
            Team leader of User Interface Web development
          </li>
          <li>2007 to 2014</li>
          <li>
            <strong>Product description:</strong> Develop and maintain an open-source product which provide collaboration and communication solutions for enterprises.
          </li>
          <li className="cv-title">Main responsibilities:</li>
          <li className="list-txt">Organize / Follow / Review the workload and the work of
            the team on several projects.</li>
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
  const [layout, setLayout] = useState("layout1");                // set layout column
  const [color, setColor] = useState("default");                  // set layout color
  const [display, setDisplay] = useState("show");                 // set show hide
  const [mainDisplay, setMainDisplay] = useState("layout-hide");  // set blur

  let cvPersonal = "";
  let cvMySelf = "";
  let cvSkill = "";
  let cvFramework = "";
  let cvContact = "";
  let cvEducation = "";
  let cvExperience1 = "";
  let cvExperience2 = "";
  let cvDemo = "";
  let cvEmpty = "";

  if (layout === "layout1") {
    cvPersonal = "box-sm-12 box-md-4 box-lg-3 box-h-5";
    cvMySelf = "box-sm-12";
    cvSkill = "box-sm-6";
    cvFramework = "box-sm-6";
    cvContact = "box-sm-12 box-md-12";
    cvEducation = "box-sm-12 box-md-7 box-h-auto";
    cvExperience1 = "box-sm-12 box-md-8";
    cvExperience2 = "box-sm-12 box-md-8";
    cvDemo = "box-sm-12";
    cvEmpty = "box-sm-empty";
  } else if (layout === "layout2") {
    cvPersonal = "box-sm-12 box-md-9 box-lg-7";
    cvMySelf = "box-sm-12";
    cvSkill = "box-sm-6 box-md-3";
    cvFramework = "box-sm-6 box-md-4";
    cvContact = "box-sm-12 box-md-4";
    cvEducation = "box-sm-9";
    cvExperience1 = "box-sm-9 box-md-4";
    cvExperience2 = "box-sm-9 box-md-3";
    cvDemo = "box-sm-12 box-md-3";
    cvEmpty = "box-md-3 box-h-3";
  }
  return (
    <div className={`cv-page`}>
      <div className={`light-box-frame ${display}`}>
        <div className="light-box">
          <section className="light-box-form cv-box-grid">
            <div className="box-sm-12 description flex align-items-center">
              <div className="fa fa-handshake-o"></div>
              <div class="description-content">This is Thuy Nguyen's CV and a demo page for my skills.<br/> I hope you ENJOY it!!!</div>
            </div>
            <div className="box-sm-12 align-center">
              <label>Can tell me what kind of color do you like?</label>
              <div className="color-list flex justify-content-center">
                <button className={"btn-red " + (color === "layout-red" ? "btn-active" : "")} onClick={() => {
                  setColor("layout-red");
                  setDisplay("hide");
                  setMainDisplay("");
                }}>
                </button>
                <button className={"btn-blue " + (color === "layout-blue" ? "btn-active" : "")} onClick={() => {
                  setColor("layout-blue");
                  setDisplay("hide");
                  setMainDisplay("");
                }}>
                </button>
                <button className={"btn-green " + (color === "layout-green" ? "btn-active" : "")} onClick={() => {
                  setColor("layout-green");
                  setDisplay("hide");
                  setMainDisplay("");
                }}>
                </button>
                <button className={"btn-orange " + (color === "layout-orange" ? "btn-active" : "")} onClick={() => {
                  setColor("layout-orange");
                  setDisplay("hide");
                  setMainDisplay("");
                }}>
                </button>
              </div>
            </div>
            <div className="box-sm-12 align-center">
              <button type="button" className="btn-close" onClick={() => {
                  setDisplay("hide");
                  setMainDisplay("");}}>Close</button>
            </div>
          </section>
        </div>
      </div>
      <div className={`cv-page-main cv-box-grid ${layout} ${color} ${mainDisplay}`}>
        <header className={"bg-custom-color cv-demo " + cvDemo}>
          <h4>This is a simple demo about Grid Layout. Click on the button to see how it works.</h4>
          <button className={"btn-demo btn-custom-color " + (layout === "layout1" ? "btn-active" : "")} onClick={() => {
            setLayout("layout1");
          }}>
            Layout 1
          </button>

          <button className={"btn-demo btn-custom-color " + (layout === "layout2" ? "btn-active" : "")} onClick={() => {
              setLayout("layout2");
          }}>
            Layout 2
          </button>
          
          <button className="btn-demo btn-custom-color " onClick={() => {
              setDisplay("show");
              setMainDisplay("layout-hide");
          }}>
            Change color
          </button>
        </header>
        <section className={"cv-personal " + cvPersonal}>
          <div className="cv-box-grid">
            <div className={cvMySelf}>
              <MySelf/>
            </div>
            <div className={cvSkill}>
              <Skill/>
            </div>
            <div className={cvFramework}>
              <Framework/>
            </div>
            <div className={cvContact}>
              <Contact/>
            </div>
          </div>
        </section>
        <section className={"cv-empty " + cvEmpty}></section>

        <section className={"cv-education " + cvEducation}>
          <Education/>
        </section>
        <section className={"cv-experience " + cvExperience1}>
          <Experience1/>
        </section>
        <section className={"cv-experience " + cvExperience2}>
          <Experience2/>
        </section>
      </div>
    </div>
  );
}

export default App;
