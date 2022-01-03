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
            <strong>Product description:</strong> 
            Turn business intelligence into a business advantage! Customized cockpits display 
            your business-relevant data and information in real time in easy-to-understand reports and graphics.
            <p>
              We help our customers collect data and create reports and analyst data with many types of period time. 
              Based on that intelligent report, customers can see easily how to improve their weaknesses in business.
            </p>
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

const Screenshort = () => {
  return (
    <div className="cv-box">
      <h5 className="cv-box-title text-custom-color">Portfolio</h5>
      <div className="cv-box-content cv-box-grid">
        <div className="box-sm-4">
          <img src="https://lh3.googleusercontent.com/0DWgwop55L-7GRLDfEmpohCA7aVKqmN4YxGuZX388OQohGsTAwk8uxv2RctEFqwrD2y61tOq9YL22VaBpsrZHJO-74iwjlqleml5pzPgGQ=w890-h955-no"
              alt="" />
        </div>
        <div className="box-sm-4">
          <img src="https://lh3.googleusercontent.com/ClqlPFpoO3OaIvzg_OmCAABq-4_OwHcA2RoHJciLrpDjn1ZgTjX-XRr32-qG1EiYAIylKr0ycNBDWPRyA-_326Qoa2SVh2qaJ4eosCJLQg=w673-h955-no"
              alt="" />
        </div>
        <div className="box-sm-4">
          <img src="https://lh3.googleusercontent.com/ZVv3bEaKKUfVbnvEoQTXfooorSGi-iHj6QuDxPzt2W2vIodmWICAt1Chs3Gwob9PNXEhrO9RaJeOG8W4_yK7RqkQ-h15c5oxcbQtwn9woA=w899-h955-no"
              alt="" />
        </div>
        <div className="box-sm-6">
          <img src="https://lh3.googleusercontent.com/R7zcK9qaFLgpwdsNasNOY40Y-iGYYz95nHFPJEhBU-YOSQbTEAVAM_ranR64gseha515c-vzcXFBhVIi0qkuTw4qmx4hYQtvTDStFBa9uw=w1082-h479-no" 
              alt="" />
        </div>
        <div className="box-sm-6 box-h-2">
          <img src="https://lh3.googleusercontent.com/fQ4j4kRhDMlu7ZBnxyS73GlWZyUIHeoJPjgZIw6cervD6s-tE6Nt6msCOqPYgq5zIjXrHksS8nVKpbB9wFV7gnUuGiQnDiJzlcVKbGusGg=w609-h955-no" 
              alt="" />
        </div>
        <div className="box-sm-6">
          <img src="https://lh3.googleusercontent.com/cbXLrZsQnUyJTsojX8iLEtmslh_r2_SUqQJza093rGxf89Iv9RAXMxCMM-cQV76oyrjUK_o6HuoJGJg5YeSMb6QcxqejGCpDI2qrJ_8vTw=w943-h955-no" 
              alt="" />
        </div>
        <div className="box-sm-6">
          <img src="https://lh3.googleusercontent.com/uGrQAswf2tX9FC5AhKxoSjAnVfsstlzr6RIREPRXLmK4Dn6S20LJfdc7c6s4nIGqfpc7qJiMPLRhKYvNYQyuQnKWUb-xTBxj1cRaa8OTNA=w1349-h913-no" 
              alt="" />
        </div>
        <div className="box-sm-6">
          <img src="https://lh3.googleusercontent.com/-mY2ntts13eVwbV18rK3KeJMJMJ6MJ_LU13nrI9npHPDwfopBuYV4TqRsSqBRaQSidRFPi_uCXfyWWoK-skou1P4Yr5W_z9xo40uyyEAUg=w1349-h923-no" 
              alt="" />
        </div>
        <div className="box-sm-6 box-h-2">
          <img src="https://lh3.googleusercontent.com/MhqD7XLoWerGvHR0MWpCeZ-j_wPDQ7Pxw94Pw4t4rFDuTURrBWvH8NFzUE_1hPTTRxPxzAnfHOKt9EcS13lrAA3oh8AaZCDkc3pH4BmpSw=w558-h955-no" 
              alt="" />
        </div>
        <div className="box-sm-6">
          <img src="https://lh3.googleusercontent.com/5zjJb5gVZrQE1ReQcU5vrB4yFjQtsOqI61LZx0jUar8mNsRnGwmc7_5BC8y6D8U6H-h8xGsMY31Slt9aD8c7WVOgnCJI8LSjqd-IgUn3PA=w1349-h798-no" 
              alt="" />
        </div>
        <div className="box-sm-6">
          <img src="https://lh3.googleusercontent.com/FQ2SGRvqzcPNHkMvGUD6GLelDCN9k-vIO2DzrcNNwqQoFxlfGvPbv96EKS38gxnwtlwZpm51L0pQz2-oQJPzNaKw8OmiMjU3CAhQr575nQ=w1349-h919-no" 
              alt="" />
        </div>
        <div className="box-sm-6">
          <img src="https://lh3.googleusercontent.com/PHGd2FArTAfadT5ChMom_EiB10C1A9LMXTxPmJIHO9_mo-B_G_qcbBNkvTiW8E9x6OHHp3aqv1i2sNaQjii6x4yfBKeUhX_J2qW6SvoQ8A=w1349-h770-no" 
              alt="" />
        </div>
        <div className="box-sm-6">
          <img src="https://lh3.googleusercontent.com/-8r0WOkHh21QGCJH5H17ja9wZe-50Cf-vQ6Vw_Snoo6CMGCNju-HevvBunpWTXfNmW3D0dBdcvMAKAJLWe9CyYmOUXtQHEd04hazxInA9A=w1349-h770-no" 
              alt="" />
        </div>
        <div className="box-sm-4">
          <img src="https://lh3.googleusercontent.com/kfK4ZaYVPMxHOPFlBJtVpeKh0iiwdH0OFUs_GYGm9OU3OzPqW17DnclEG4R7hxpJBLSnLI4aS5E5i_-JA2WebHv2w54KzCivK8Knf1UZ5Q=w1232-h955-no" 
              alt="" />
        </div>
        <div className="box-sm-4">
          <img src="https://lh3.googleusercontent.com/2CZXe-k7V8IDuZtwQ8X6SGAfryZLh_je_C9MhkZz-glD7bK6CHZ2tNCyCz5w_xCBkNV9LTu1Z-XZ0qD1YX63aR_pxJ6HetIfg3Vs-uItpg=w1232-h955-no" 
              alt="" />
        </div>
        <div className="box-sm-4">
          <img src="https://lh3.googleusercontent.com/kWK-uX1IoRD7zZOnT46Dt216JvgxW6uBJRjaGX4gz-xykd_Oi-XwBUWznUdEXTM2Acr5euN2fZTRJRa2tJBWKTP0c-tlKHWDenB-kiuH_g=w1232-h955-no" 
              alt="" />
        </div>
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
  let cvScreenshort = "";

  if (layout === "layout1") {
    cvPersonal = "box-sm-12 box-md-4 box-lg-3 box-h-5";
    cvMySelf = "box-sm-12";
    cvSkill = "box-sm-6";
    cvFramework = "box-sm-6";
    cvContact = "box-sm-12 box-md-12";
    cvEducation = "box-sm-12 box-md-7 box-h-auto";
    cvExperience1 = "box-sm-12 box-md-8";
    cvExperience2 = "box-sm-12 box-md-8";
    cvScreenshort = "box-sm-12";
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
    cvScreenshort = "box-sm-9";
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
        <section className={"cv-screenshort " + cvScreenshort}>
          <Screenshort/>
        </section>
      </div>
    </div>
  );
}

export default App;
