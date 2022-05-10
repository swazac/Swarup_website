import React from 'react'
import CV from '../../files/CV.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Swarup_Zachariah_resume" className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  );
}

export default CTA