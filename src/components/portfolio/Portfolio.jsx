import React from 'react';
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      <article className="portfolio__item">
        <div className="porfolioitem-image">
        <img src="https://img.freepik.com/premium-vector/creative-corporate-business-powerpoint-presentation-slide-template-annual-report-layout_498208-625.jpg?size=626&ext=jpg&uid=R79322624&ga=GA1.2.973770838.1663292697" alt="title" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com' className='btn ' target="_blank" rel='noreferrer'>Github</a>
        <a href="http://dribble.com" className='btn btn-primary' target="_blank" rel='noreferrer'>Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="porfolioitem-image">
        <img src="https://img.freepik.com/premium-psd/personal-portfolio-template_215790-16.jpg?size=626&ext=jpg&uid=R79322624&ga=GA1.2.973770838.1663292697" alt="title" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com' className='btn ' target="_blank" rel='noreferrer'>Github</a>
        <a href="http://dribble.com" className='btn btn-primary' target="_blank" rel='noreferrer'>Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="porfolioitem-image">
        <img src="https://img.freepik.com/premium-vector/agriculture-business-powerpoint-presentation-template_123371-145.jpg?size=626&ext=jpg&uid=R79322624&ga=GA1.2.973770838.1663292697" alt="title" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com' className='btn ' target="_blank" rel='noreferrer'>Github</a>
        <a href="http://dribble.com" className='btn btn-primary' target="_blank" rel='noreferrer'>Live Demo</a>
        </div>
      </article>
    </div>
    </section>
  )
}

export default Portfolio