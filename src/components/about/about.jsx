import React from 'react'
import './about.css'
import mypic from "../../files/MyPic.jpg";
import {GiPodiumWinner} from 'react-icons/gi'
import {IoIosPeople} from "react-icons/io";
import {SiPolywork} from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h3>Get to know</h3>
      <h2> Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={mypic} alt="My pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiPodiumWinner className="about__icon" />
              <h4>Experience</h4>
              <h6>8+ years professional experience</h6>
            </article>

            <article className="about__card">
              <IoIosPeople className="about__icon" />
              <h4>Background</h4>
              <h6>Web development, Aerospace, Healthcare, & Simulations</h6>
            </article>

            <article className="about__card">
              <SiPolywork className="about__icon" />
              <h4>Projects</h4>
              <h6>80+ completed projects</h6>
            </article>
          </div>
          <p>
            My name is Swarup Zachariah and I’ve been working in the software
            engineering industry for the past 8 years. I have delighted clients
            with projects in aviation, healthcare, and simulation industries.
            With a bachelors and masters in mechanical engineering, my
            professional experience was geared towards improving software for
            my former employers, Infosys and Ansys in the areas of design and
            testing, respectively. I am particularly interested in
            developing React based applications to quickly build efficient and
            scalable designs. I am really excited to bring my skills to deliver
            for your organization.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About