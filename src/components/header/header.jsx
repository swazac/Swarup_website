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
            <h3>A Fullstack Developer and hiking enthusiast</h3>
            <CTA />
            <HeaderSocials />
        </div>
      </div>
    </header>
  );
}

export default Header