import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Experience from './components/experience/experience';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';

const App = () => {
  return (
    <div className=" stars twinkling clouds">
        <Header />
        <Nav />
        <Experience />
        <Portfolio />
        <Contact />
    </div>
  );
}

export default App