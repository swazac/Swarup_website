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
    github: "https://github.com/swazac/Achieve",
    demo: "https://swazac.github.io/Achieve",
  },
  {
    id: 2,
    image: IMG2,
    title: "Dice game",
    github: "https://github.com/swazac/dice_game",
    demo: "https://swazac.github.io/dice_game/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Drum Kit",
    github: "https://github.com/swazac/drum_kit",
    demo: "https://swazac.github.io/drum_kit/",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <div className='container'>
        <h2>My recent work</h2>
        <div className="portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
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
          })}
        </div>
      </div>
    </section>
  );
}

export default portfolio