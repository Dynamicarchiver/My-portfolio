import React from "react";
import "./About.css";
import { BsAwardFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdFolderSpecial } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src="/assets/images/header2.jpg" alt="" className="about__me-image" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill />
              <h5>Experience</h5>

              <small>1 year working</small>
            </article>
            <article className="about__card">
              <FaUsers />
              <h5>Clients</h5>

              <small>10+ Worldwide </small>
            </article>
            <article className="about__card">
              <MdFolderSpecial />
              <h5>Projects</h5>

              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am a frontend web developer with full knowledge of
            Html,Css,Bootstrap,React.js and Node.js. I have created 10+ modern
            responsive website(e-commerce,learning,calculator among others).
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
