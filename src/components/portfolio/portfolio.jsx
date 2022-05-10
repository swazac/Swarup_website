import React from 'react'
import './portfolio.css'
import IMG1 from '../../images/portfolio1.jpg'
import IMG2 from "../../images/portfolio2.jpg";
import IMG3 from "../../images/portfolio3.jpg";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Achieve",
    github: "https://www.google.com/",
    demo: "https://www.google.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Title demo 2",
    github: "https://www.google.com/",
    demo: "https://www.google.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Title demo 3",
    github: "https://www.google.com/",
    demo: "https://www.google.com/",
  },
];




const portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My recent work</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
}

export default portfolio