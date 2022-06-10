import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h3> What skills I have</h3>
      <h2>My experience</h2>

      <div className="experience__container">
        <div>
          <h3>Frontend Development</h3>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>HTML</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>CSS</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>Javascript</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>jquery</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>React</h4>
          </article>
        </div>

        <div>
          <h3>Backend Development</h3>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>Node.js</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>EJS</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>SQL</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>MongoDB</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>API</h4>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience