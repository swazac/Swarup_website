import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h3> What skills I have</h3>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>HTML</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>CSS</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Javascript</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>jquery</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>React</h4>
            </div>
          </article>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Node.js</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>EJS</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>SQL</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>MongoDB</h4>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>API</h4>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience