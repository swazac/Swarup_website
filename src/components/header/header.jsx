import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './headerSocials'

const Header = () => {
  return (
    <header>
      <div id="header">
        <div className="container header__container">
          <h3> Hello I am</h3>
          <h2>Swarup Alex Zachariah</h2>
          <p className='about_me'>
            A Fullstack Developer and hiking enthusiast. After 8 years in the
            software engineering industry with experiences in design and
            testing, I am transitioning careers to move into software
            development. Scroll below to learn more about my skills and
            endeavors from the recent past.
          </p>
        </div>
        <div className='CTA'>
          <CTA />
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
}

export default Header